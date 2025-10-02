<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let label: string = "Branch A Submit"; // Changed Default
    export let variant: "primary" | "secondary" = "primary"; // New Prop
    export let branchAVariable: string = "A";
    export let disabled: boolean = false;
    const dispatch = createEventDispatcher<{ pressed: { at: number }}>();
    function handleClick() {
        if (disabled) return;
        dispatch("pressed", {at: Date.now() });
    }
</script>

<button class="btn" data-variant={variant} {disabled} on:click={() => console.log("Clicked")}>
    {label}
    {branchAVariable}
</button>

<style>
    .btn {
        padding: 0.5rem 1rem;
        color: white;
        border-radius: 0.375rem;
        opacity: var(--opacity, 1);
    }

    .btn:disabled { --opacity: 0.6; cursor: not-allowed; }

    .btn[data-variant="primary"] { background: #2563EB; } /* Blue-600 */
    .btn[data-variant="secondary"] { background: #6B7280; } /* Gray-500 */
    .btn[data-variant="A"] { background: #2ceb25; } /* Green */
</style>