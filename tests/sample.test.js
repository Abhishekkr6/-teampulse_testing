import { generateFractal } from "../labs/fractal.js";

describe("generateFractal", () => {
    it("produces a grid with requested dimensions", () => {
        const width = 6;
        const height = 4;
        const result = generateFractal(width, height);
        expect(result).toHaveLength(height);
        expect(result.every((row) => row.length === width)).toBe(true);
    });
});
