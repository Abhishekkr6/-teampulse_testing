import { randomWord } from "../tools/random_util";

describe("randomWord", () => {
    it("generates the desired length", () => {
        const word = randomWord(10);
        expect(word).toHaveLength(10);
    });
});
