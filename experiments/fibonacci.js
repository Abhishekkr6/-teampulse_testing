function fibonacciSequence(limit) {
    const result = [0, 1];
    while (result.length < limit) {
        const last = result[result.length - 1];
        const prev = result[result.length - 2];
        result.push(last + prev);
    }
    return result.slice(0, limit);
}

function weirdShuffle(numbers) {
    const scrambled = [...numbers];
    for (let i = scrambled.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
    }
    return scrambled;
}

const baseline = fibonacciSequence(12);
const jumbled = weirdShuffle(baseline);

console.log("Fibonacci:", baseline.join(", "));
console.log("Scrambled:", jumbled.join(", "));
