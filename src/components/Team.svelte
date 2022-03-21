<script>
	import DeleteButton from './components/DeleteButton.svelte';
    import Button from "./components/Button.svelte";
    import {
        finishTable,
        time,
        teams,
        isEditable,
        hexToRgb,
    } from "./stores.js";
    export let id;
    export let name = "Untitled Team";
    export let color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    function finish() {
        finishTable.set([
            ...$finishTable,
            {team_name: name, team_color: color, time: $time },
        ]);
    }
    function deleteTeam() {
        teams.set($teams.filter(t => t.id !== id))
    }
</script>

{#if $isEditable}
    <div class="col btn red-hover flex-row d-flex justify-content-between border mx-1 mb-1" style="background-color: #dce1e7;">
        <div></div>
        <h3 class="my-1">{name}</h3>
        <DeleteButton on:click={deleteTeam}/>
    </div>
{:else}
    <button
        class="col btn mb-1"
        style="background-color:rgba({hexToRgb(color)}, 50)"
        on:click={finish}
    >
        {name}
    </button>
{/if}

<style>
    button {
        border-radius: 0.25em;
        margin-left: 1em;
        margin-right: 1em;
    }
</style>
