import { describe, it, expect } from "vitest";
import { combinedFilter } from "./combined";
import { mapSequ } from "../RunningTotal";

describe("Combine (Mine -> Peer)", () => {
    it("Nathan Test", () => {
        const input = [4, 2, 8, 3, 9, 4, 10, 5, 11, 6];
        const expected = [4, 6, 14, 17, 26, 30, 40, 45, 56, 62];
        expect(mapSequ(input)).toEqual(expected);
    });
    it("Jordan Test", () => {
        const input = [16, 36, 64, 144, 256, 36, 36];
        const expected = [16, 36, 64, 144, 256];
        expect(combinedFilter(input)).toEqual(expected);
    });
});