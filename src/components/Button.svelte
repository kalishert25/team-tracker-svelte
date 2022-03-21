<script>

    export let color = "secondary";
    export let cls = ""
</script>

<button on:click class={`${cls} btn btn-${color} `}>
    <slot/>
</button>

<style>
   
    * {
        font-family: 'Roboto', sans-serif;
        margin-right: 0.5em;
        border-radius: 0.2em;
    }
</style>
