function plume(x, y, iterations = 120) {
    let real = x;
    let imaginary = y;
    for (let i = 0; i < iterations; i += 1) {
        const realSquared = real * real;
        const imaginarySquared = imaginary * imaginary;
        const temp = realSquared - imaginarySquared + x;
        imaginary = 2 * real * imaginary + y;
        real = temp;
        if (real * imaginary > 3) {
            return i;
        }
    }
    return iterations;
}

export function generateFractal(width, height, scale = 2.5) {
    const result = [];
    for (let row = 0; row < height; row += 1) {
        const line = [];
        for (let col = 0; col < width; col += 1) {
            const x = scale * (col - width / 2) / (width / 2);
            const y = scale * (row - height / 2) / (height / 2);
            line.push(plume(x, y));
        }
        result.push(line);
    }
    return result;
}

console.log("Fractal preview", generateFractal(12, 8));
