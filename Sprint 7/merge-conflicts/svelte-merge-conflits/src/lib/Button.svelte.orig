<script lang="ts">
    import { createEventDispatcher } from "svelte";
<<<<<<< HEAD
    export let label: string = "Branch A Submit"; // Changed Default
=======
    export let label: string = "Submit"; // Changed Default
    export let secondText : string = "FromBranchB";
>>>>>>> Branch_B
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
<<<<<<< HEAD
    {branchAVariable}
=======
    {secondText}
>>>>>>> Branch_B
</button>

<style>
    .btn {
        padding: 0.75rem 1rem;
        color: white;
        border-radius: 0.375rem;
        opacity: var(--opacity, 1);
    }

    .btn:disabled { --opacity: 0.6; cursor: not-allowed; }

    .btn[data-variant="primary"] { background: #2563EB; } /* Blue-600 */
<<<<<<< HEAD
    .btn[data-variant="secondary"] { background: #6B7280; } /* Gray-500 */
    .btn[data-variant="A"] { background: #2ceb25; } /* Green */
=======
    .btn[data-variant="secondary"] { background: #00ff2a; } /* Lime Green */
>>>>>>> Branch_B
</style>