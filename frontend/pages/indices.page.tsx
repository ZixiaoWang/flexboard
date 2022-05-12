
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { RoutePage } from "../interfaces";

declare global {
    interface Window {
        shanghaiFreightIndices: any
    }
}

const TODAY: string = new Date().toISOString().split("T")[0];

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

    const queryData = (newDate: string): void => {
        let targetDate: string = newDate || "";
        if (/^\d{4}-\d{2}-\d{2}$/.test(targetDate)) {
            targetDate = targetDate.replace(/-/g, "");
        }
        if (!window.shanghaiFreightIndices || !window.shanghaiFreightIndices.has(targetDate)) {
            const script: HTMLScriptElement = document.createElement("script");
            script.onload = () => updateDataByDate(targetDate);
            script.onerror = console.log;
            script.src = "data/indices/" + targetDate + ".js";
            document.body.appendChild(script);
        } else {
            updateDataByDate(targetDate);
        }
    }

    const updateDate = (event: any): void => {
        const newDate: string = event?.target?.value || "";
        if (/^\d{8}$|^\d{4}-\d{2}-\d{2}$/.test(newDate)) {
            setDate(newDate);
        }
    }

    const updateIndice = (event: any): void => {
        const newIndice: string = event?.target?.value || "CCFI";
        setIndice(newIndice)
    }

    const requestFullScreen = (): void => {
        setTimeout(async () => {
            if (window.innerHeight < window.innerWidth) {
                const indicesElement: HTMLElement | null = document.getElementById("indices");
                const indicesTableElement: HTMLElement | null = document.querySelector("#indices .indices-table");
                if (indicesElement) {
                    try {
                        await indicesElement.requestFullscreen();
                        indicesTableElement?.classList?.add("is-full-screen");
                    } catch (error) {
                        console.error(error)
                    }
                }
            } else {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                    const indicesTableElement: HTMLElement | null = document.querySelector("#indices .indices-table");
                    indicesTableElement?.classList?.remove("is-full-screen");
                }
            }
        }, 100);
    }

    const forceRequestFullScreen = () => {
        const indicesElement: HTMLElement | null = document.getElementById("indices");
        const indicesTableElement: HTMLElement | null = document.querySelector("#indices .indices-table");
    }

    useEffect(() => {
        requestFullScreen();
        window.addEventListener("orientationchange", requestFullScreen);
    }, []);

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
        <div className="indices" id="indices">
            <div className="article-actions is-level">
                <div className="is-level-left white" onClick={() => history.back()}>
                    <ion-icon name="chevron-back"></ion-icon>
                </div>
            </div>
            <div className="indices-header">
                {((data[0]?.[0] || {}) as any).text}
            </div>
            <div className="indices-actions">
                <div className="indices-action">
                    <input type="date" name="date" id="indicesdate" onChange={updateDate} value={date} />
                </div>
                <div className="indices-action">
                    <select name="indices" id="indicestype" onChange={updateIndice}>
                        {
                            indiceOptions.map((indiceLabel: string, index: number) => (
                                <option label={indiceLabel} key={index}>{indiceLabel}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="indices-table">
                <table className="table">
                    {
                        data
                            .slice(1, data.length - 1)
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
        </div>
    )
}