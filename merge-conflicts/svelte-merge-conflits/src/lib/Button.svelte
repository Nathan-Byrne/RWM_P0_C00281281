<script lang="ts">
    export let label: string = "Submit"; // Changed Default
    export let variant: "primary" | "secondary" = "primary"; // New Prop
</script>

<button class="btn" data-variant={variant} on:click={() => console.log("Clicked")}>
    {label}
</button>

<style>
    .btn {
        padding: 0.5rem 1rem;
        color: white;
        border-radius: 0.375rem;
    }

    .btn[data-variant="primary"] { background: #2563EB; } /* Blue-600 */
    .btn[data-variant="secondary"] { background: #6B7280; } /* Gray-500 */
</style>