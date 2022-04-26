
import { h } from "preact";
import { RoutePage } from "../interfaces";

const COL_NUMBER = 10;
const ROW_NUMBER = 200;

const SampleRow = () => {
    const cols = new Array(COL_NUMBER - 1).fill(0);
    return (
        <tr>
            <td className="is-sticky-col">Row property and data</td>
            {cols.map(_ => <td>{(Math.random() * 1000).toFixed(4)}</td>)}
        </tr>
    )
}

export const IndicesPage = (props: RoutePage) => {
    const rows = new Array(ROW_NUMBER).fill(0);
    return (
        <div className="indices">
            <div className="indices-header">
                Sample table <br />
                Lorem ipsum dolor sit amet.
            </div>
            <div className="indices-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="is-sticky-col">Title</th>
                            <th>Title</th>
                            <th>Title</th>
                            <th>Title</th>
                            <th>Title</th>
                            <th>Title</th>
                            <th>Title</th>
                            <th>Title</th>
                            <th>Title</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        { rows.map(_ => <SampleRow />) }
                    </tbody>
                </table>
            </div>
            <div className="indices-footer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus nobis accusantium quae cumque.
            </div>
        </div>
    )
}