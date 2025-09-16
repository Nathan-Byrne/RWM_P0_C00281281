<script lang="ts">
  import { combinedFilter } from '$lib/filters/combined/combined';
  import { mapSequ } from '$lib/filters/RunningTotal';

  const nathanRaw = "4, 2, 8, 3, 9, 4, 10, 5, 11, 6";
  $: nathanInput = nathanRaw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: nathanOutput = mapSequ(nathanInput);

  const jordanRaw = "";
  $: jordanInput = jordanRaw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: jordanOutput = combinedFilter(jordanInput);
</script>

<h1>Combined (mine -- peer)</h1>
<p>{"Nathan's Test: " + nathanOutput.join(" ")}</p>
<p>{"Jordan's Test: " + jordanOutput.join(" ")}</p>