const noise = () => Math.random() * 0.4 - 0.2;

export function synthesizeSignal(length = 120) {
    const values = [];
    for (let i = 0; i < length; i += 1) {
        const base = Math.sin(i / 8) * 3 + Math.cos(i / 13) * 2;
        values.push(Number((base + noise()).toFixed(3)));
    }
    return values;
}

export function amplify(samples, factor = 1.8) {
    return samples.map((value) => Number((value * factor).toFixed(3)));
}

export function clamp(samples, limit = 4) {
    return samples.map((value) => {
        if (value > limit) {
            return limit;
        }
        if (value < -limit) {
            return -limit;
        }
        return value;
    });
}

if (import.meta.main) {
    const signal = synthesizeSignal();
    const louder = amplify(signal, 2.5);
    const clipped = clamp(louder, 5);
    console.log("Original", signal.slice(0, 12));
    console.log("Amplified", louder.slice(0, 12));
    console.log("Clipped", clipped.slice(0, 12));
}
