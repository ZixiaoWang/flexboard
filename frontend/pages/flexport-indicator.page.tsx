import { h } from "preact";
import { RoutePage } from "../interfaces";
import { useEffect, useState } from "preact/hooks";
import { DATA } from "../helpers/getFlexportIndicatorData";
import { Chart, registerables } from "chart.js";

const BLUE = "#FDA6A6";
const RED = "#6294BE";

const getDate = (num: number): string => {
    return new Date(new Date(2019, 3, 7).getTime() + ((num - 43561) * 24 * 60 * 60 * 1000)).toISOString().split("T")[0];
}

export const FlexportIndicatorPage = (props: RoutePage) => {
    const [type, setType] = useState("OTI");
    const [chart, setChart] = useState(null);

    const OTIData: any = {
        labels: DATA.OTI.WEEK_ENDINGS.map(getDate),
        datasets: [{
            label: "Far East Westbound",
            backgroundColor: RED,
            borderColor: RED,
            data: DATA.OTI.FAR_EAST_WESTBOUND,
            borderJoinStyle: "round",
            pointRadius: 0,
        }, {
            label: "Transpacific Eastbound",
            backgroundColor: BLUE,
            borderColor: BLUE,
            data: DATA.OTI.TRANSPACIFIC_WESTBOUND,
            borderJoinStyle: "round",
            pointRadius: 0,
        }]
    };

    const ATIData: any = {
        labels: DATA.ATI.WEEK_ENDINGS.map(getDate),
        datasets: [{
            label: "Far East Westbound",
            backgroundColor: RED,
            borderColor: RED,
            data: DATA.ATI.FAR_EAST_WESTBOUND,
            borderJoinStyle: "round",
            pointRadius: 0,
        }, {
            label: "Transpacific Eastbound",
            backgroundColor: BLUE,
            borderColor: BLUE,
            data: DATA.ATI.TRANSPACIFIC_WESTBOUND,
            borderJoinStyle: "round",
            pointRadius: 0,
        }]
    };

    useEffect(() => {
        Chart.register(...registerables);
        const chartElement: HTMLCanvasElement | null = document.getElementById("chart") as HTMLCanvasElement;
        if (chartElement) {
            const chart = new Chart(chartElement, {
                type: "line",
                data: OTIData,
                options: {
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    size: 10
                                }
                            }
                        }
                    }
                },
            });
            setChart(chart);
        }
    }, []);

    useEffect(() => {
        if (chart) {
            chart.data = type === "OTI" ? OTIData : ATIData;
            chart.update();
        }
    }, [type]);

    const otiClass = type === "OTI" ? "indicator-tab is-active" : "indicator-tab";
    const atiClass = type === "ATI" ? "indicator-tab is-active" : "indicator-tab";

    return (
        <div className="indices-list indicator">
            <div className="article-actions is-level">
                <div className="is-level-left blue60" onClick={() => history.back()}>
                    <ion-icon name="chevron-back"></ion-icon>
                </div>
            </div>
            <div className="indicator-tabs">
                <div className={otiClass} onClick={() => setType("OTI")}>
                    <span className="one">OTI</span>
                    <br />
                    <span className="two">
                        Flexport's Ocean Timeliness Indicator
                    </span>
                </div>
                <div className={atiClass} onClick={() => setType("ATI")}>
                    <span className="one">ATI</span>
                    <br />
                    <span className="two">
                        Flexport's Air Timeliness Indicator
                    </span>
                </div>
            </div>
            <div className="indicator-chart">
                <canvas id="chart" height="350"></canvas>
            </div>
            <div className="is-text-center has-margin-top-8 is-text-s">
                <span>The data comes from Flexport own statistics, if you query more information, please visit </span>
                <br />
                {
                    type === "OTI" ?
                    <a href="https://www.flexport.com/research/ocean-timeliness-indicator/" target="_blank">Flexport Ocean Timeliness Indicator</a> :
                    <a href="https://www.flexport.com/research/air-timeliness-indicator/" target="_blank">Flexport Air Timeliness Indicator</a>
                }
            </div>
        </div>
    )
}