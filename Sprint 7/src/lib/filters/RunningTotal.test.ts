import { describe, it, expect } from "vitest";
import { mapSequ } from "./RunningTotal";

describe("Running Total (Pass)", () => {
    it("Replace each number by the sum of itself and all the previous numbers", () => {
        const input = [4, 2, 8, 3, 9, 4, 10, 5, 11, 6]
        const expected = [4, 6, 14, 17, 26, 30, 40, 45, 56, 62]
        expect(mapSequ(input)).toEqual(expected);
    });
});

describe("Running Total (Fail)", () => {
    it("Replace each number by the sum of itself and all the previous numbers", () => {
        const input = [4, 2, 8, 3, 13, 7, 10, 5, 2, 6]
        const expected = [4, 6, 14, 17, 26, 35, 40, 50, 56, 70]
        expect(mapSequ(input)).toEqual(expected);
    });
});