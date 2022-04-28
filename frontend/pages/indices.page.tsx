
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { RoutePage } from "../interfaces";

declare global {
    interface Window {
        shanghaiFreightIndices: any
    }
}

const TODAY: string = new Date().toISOString().split("T")[0].replaceAll("-", "");

export const IndicesPage = (props: RoutePage) => {
    const [date, setDate] = useState(TODAY);
    const [data, setData] = useState([]);
    const [dataMap, setDataMap] = useState({}) as any;
    const [indice, setIndice] = useState("CCFI");
    const [indiceOptions, setIndiceOptions] = useState([]) as any;

    const updateDataByDate = (targetDate: string): void => {
        const map = window.shanghaiFreightIndices.get(targetDate);
        const newData = map[indice] || [];
        setDataMap(map);
        setData(newData);
        setIndiceOptions(Object.keys(map));
    }

    const queryData = (targetDate: string): void => {
        if (!window.shanghaiFreightIndices || !window.shanghaiFreightIndices.has(targetDate)) {
            const script: HTMLScriptElement = document.createElement("script");
            script.onload = () => updateDataByDate(targetDate);
            script.onerror = console.log;
            script.src = "data/" + targetDate + ".js";
            document.body.appendChild(script);
        } else {
            updateDataByDate(targetDate);
        }
    }

    const updateDate = (event: any): void => {
        const newDate: string = event?.target?.value || "";
        if (/^\d{8}$|^\d{4}-\d{2}-\d{2}$/.test(newDate)) {
            setDate(newDate.replaceAll("-", ""));
        }
    }

    const updateIndice = (event: any): void => {
        const newIndice: string = event?.target?.value || "CCFI";
        setIndice(newIndice)
    }

    useEffect(() => {
        if (date) {
            queryData(date);
        } else {
            setDate(TODAY);
        }
    }, [date]);

    useEffect(() => {
        const newData = dataMap[indice] || [];
        setData(newData);
    }, [dataMap, indice]);

    return (
        <div className="indices">
            <div className="indices-actions">
                <div className="indices-action">
                    <input type="date" name="date" id="date" onChange={updateDate} value={date}/>
                </div>
                <div className="indices-action">
                    <select name="indices" id="indices" onChange={updateIndice}>
                        { 
                            indiceOptions.map((indiceLabel: string, index: number) => (
                                <option label={indiceLabel} key={index}>{indiceLabel}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="indices-header">
                { ((data[0]?.[0] || {}) as any).text }
            </div>
            <div className="indices-table">
                <table className="table">
                    {
                        data
                            .slice(1)
                            .map((row: any, rowIndex: number) => {
                                return (
                                    <tr key={`row${rowIndex}`}>
                                        {
                                            row.map((cell: any, cellIndex: number) => {
                                                return cell.tag === "td" ?
                                                <td key={`cell${cellIndex}`}
                                                    colSpan={cell.colspan || 1}
                                                    rowSpan={cell.rowspan || 1}>
                                                    {cell.text}
                                                </td> :
                                                <th key={`cell${cellIndex}`}
                                                    colSpan={cell.colspan || 1}
                                                    rowSpan={cell.rowspan || 1}>
                                                    {cell.text}
                                                </th>
                                            })
                                        }
                                    </tr>
                                )
                            })
                    }
                </table>
            </div>
            <div className="indices-footer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus nobis accusantium quae cumque.
            </div>
        </div>
    )
}