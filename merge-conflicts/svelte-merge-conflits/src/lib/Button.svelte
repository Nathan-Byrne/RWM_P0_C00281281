<script lang="ts">
    export let label: string = "Click me";
</script>

<button class="btn" on:click={() => console.log("Clicked")}>
    {label}
</button>

<style>
    .btn {
        padding: 0.5rem 1rem;
        background: #EEEEEE;
        color: #222222;
        border-radius: 0.375rem;
    }
</style>