import { useEffect, useState } from "react";

const randomFacts = [
    "Sea cucumbers fight with their guts.",
    "Bananas are berries, botanically speaking.",
    "Octopuses have three hearts.",
    "Honey never spoils, even after centuries.",
];

function rollFact() {
    const index = Math.floor(Math.random() * randomFacts.length);
    return randomFacts[index];
}

export default function Widget() {
    const [fact, setFact] = useState(rollFact());
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setFact(rollFact());
            setTicks((current) => current + 1);
        }, 2500);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="widget">
            <header>
                <h3>Random Fact Generator</h3>
                <p>Rotating useless knowledge since page load.</p>
            </header>
            <aside>
                <strong>Fact:</strong>
                <p>{fact}</p>
            </aside>
            <footer>
                <small>Refreshed {ticks} times.</small>
            </footer>
        </section>
    );
}
