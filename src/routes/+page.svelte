<script lang='ts'>
    import { cubes } from '$lib/filters';
    let raw = '1 3 5 7 9 999';
    $: input = raw.trim().split(/\s+/).filters(Boolean).map(Number);
    $: output = cubes(input);
</script>

<h1>Sequence Filter Demo</h1>
<label>
    Input (space-separated integers)
    <input bind:value={raw} placeholder='e.g., 4 3 2 1 0' />
</label>

<h2>Output</h2>
<p>{output.join(' ')}</p>

<style>
    label { display: block; margin: 1rem 0; }
    input { width: 100%; max-width: 30rem; }
</style>