import { useMemo } from "react";
import mockData from "../data/mockdata.json" assert { type: "json" };

function synthesizeMetrics(source) {
    const count = source.length;
    const average = source.reduce((sum, item) => sum + item.score, 0) / count;
    const active = source.filter((item) => item.meta.active).length;
    return {
        count,
        average: average.toFixed(2),
        active,
    };
}

export default function StatusPanel() {
    const stats = useMemo(() => synthesizeMetrics(mockData), []);
    return (
        <section className="status-panel">
            <h2>Dataset Snapshot</h2>
            <ul>
                <li>Total entries: {stats.count}</li>
                <li>Active flags: {stats.active}</li>
                <li>Average score: {stats.average}</li>
            </ul>
            <p className="status-note">Totally serious analytics instrument.</p>
        </section>
    );
}
