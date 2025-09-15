<script lang="ts">
    import { cubes } from '$lib/filters';
    import { mapSequ } from '$lib/filters';
    let p1inputRaw = '4 2 8 3 9 4 10 5 11 6';

    $: p1_1input = p1inputRaw.trim().split(/\s+/).filter(Boolean).map(Number);
    $: p1_1output = mapSequ(p1_1input);

    $: p1_2input = p1inputRaw.trim().split(/\s+/).filter(Boolean).map(Number);
    $: p1_2output = mapSequ(p1_2input);
</script>

<h1>Sequence Filter Demo</h1>
<label>
    Input (space-separated integers)
    <input bind:value={p1inputRaw} placeholder="e.g., 4 3 2 1 0" />
</label>

<h2>Output</h2>
<p>{"RunningTotal (Pass): " + p1_1output.join(' ')}</p>
<p>{"RunningTotal (Fail): " + p1_2output.join(' ')}</p>


<style>
  label { display: block; margin: 1rem 0; }
  input { width: 100%; max-width: 30rem; }
</style>