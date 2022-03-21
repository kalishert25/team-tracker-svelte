<script>
    import DeleteButton from "./DeleteButton.svelte";
    import {
        editableTableNames,
        raceLen,
        msToTime,
        finishTable,
    } from "../stores.js";
    export let place;
    export let team_name;
    export let color;
    export let time;
    let name;
    let grade = "12";
    $: min_dist = msToTime(time / $raceLen[0], false);
    const deleteRunner = () => {
        finishTable.update((table) => table.filter((v, i) => i !== place - 1));
    };
</script>

<tr>
    <td>{place}</td>
    <td style="background-color:{color} !important;">{team_name}</td>
    <td>{msToTime(time)}</td>
    {#if $editableTableNames}
        <td><input bind:value={name} class="form-input" /></td>
        <td class="w-25 px-0"
            ><input
                type="number"
                min="1"
                max="12"
                bind:value={grade}
                class="form-input"
            /></td
        >
    {:else}
        <td>{name || "_ _ _ _ _"}</td>
        <td>{grade || "_"}</td>
    {/if}
    <td>{min_dist}</td>
    <td>
        <DeleteButton on:click={deleteRunner} />
    </td>
</tr>

<style>
    tr {
        background-color: "red" !important;
    }
</style>
