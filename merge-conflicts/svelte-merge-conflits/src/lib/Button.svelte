<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let label: string = "Click me";
    export let disabled: boolean = false;
    const dispatch = createEventDispatcher<{ pressed: { at: number }}>();
    function handleClick() {
        if (disabled) return;
        dispatch("pressed", {at: Date.now() });
    }
</script>

<button class="btn" {disabled} on:click={() => console.log("Clicked")}>
    {label}
</button>

<style>
    .btn {
        padding: 0.5rem 1rem;
        background: #EEEEEE;
        color: #222222;
        border-radius: 0.375rem;
        opacity: var(--opacity, 1);
    }

    .btn:disabled { --opacity: 0.6; cursor: not-allowed; }
</style>