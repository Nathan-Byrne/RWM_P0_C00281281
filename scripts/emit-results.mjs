import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { mapSequ } from "../src/lib/filters/RunningTotal";

console.log("Reached 1st");

const mod = await import(pathToFileURL('./src/lib/filters/combined/combined.ts').href);
const { combinedFilter } = mod;

const inputs = {
  nathanInputs: [4, 2, 8, 3, 9, 4, 10, 5, 11, 6],
  jordanInputs: [16, 36, 64, 144, 256, 36, 36]
};

const outputs = {};

for (const [arrName, arr] of Object.entries(inputs)) {
  if (arrName == "nathanInputs")
    outputs[arrName] = mapSequ(arr);
  else 
    outputs[arrName] = combinedFilter(arr);
}

const artefact = { filterOrder: 'Mine -> Peer', inputs, outputs };
writeFileSync('static/combined-results.json', JSON.stringify(artefact, null, 2));
console.log('Wrote static/combined-results.json');
