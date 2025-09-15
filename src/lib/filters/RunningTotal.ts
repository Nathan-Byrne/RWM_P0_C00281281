var total = 0

export function runTotal(nextnum: number): number {
    total += nextnum;
    return total;
}

// Maps over Sequence
export function mapSequ(result: number[]): number[] {
    return result.map(runTotal);
}