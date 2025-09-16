import { cubes as myCubes } from "$lib/filters/cube";
import { dupeCheck } from "peer-filter-c00287898/src/lib/filters/removeDupes";

export function combinedFilter(xs: number[]): number[] {
    return dupeCheck(xs);
}