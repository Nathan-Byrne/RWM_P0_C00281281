// Pure function: cube a single int
export function cube(x: number): number {
    return x * x * x;
}

// Map over a sequence
export function cubes(xs: number[]): number[] {
    return xs.map(cube);
}