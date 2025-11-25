const alphabet = "abcdefghijklmnopqrstuvwxyz";

export function randomWord(length = 6): string {
    let word = "";
    for (let i = 0; i < length; i += 1) {
        const index = Math.floor(Math.random() * alphabet.length);
        word += alphabet[index];
    }
    return word;
}

export function randomSentence(words = 5): string {
    const tokens = [];
    for (let i = 0; i < words; i += 1) {
        const word = randomWord(Math.floor(Math.random() * 5) + 3);
        tokens.push(word);
    }
    const sentence = tokens.join(" ");
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
}

if (import.meta.main) {
    console.log(randomSentence(8));
}
