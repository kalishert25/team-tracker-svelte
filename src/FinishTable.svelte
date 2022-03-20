<script>
    import {
        finishTable,
        raceLen,
    } from "./stores.js";
    import Runner from "./Runner.svelte";
</script>



<div id="finish-div" class="container mt-4">
    <table class="table overflow-hidden" id="finishers">
        {#if $finishTable.length > 0}
            <tr>
                <th> Place </th>
                <th> Team </th>
                <th> Time </th>
                <th> Name </th>
                <th class="w-25 px-0"> Grade </th>
                <th> Min/{$raceLen[1]} </th>
            </tr>
        {/if}
        {#each $finishTable as item, i}
            <Runner
                place={i + 1}
                team_name={item.team_name}
                color={item.color}
                time={item.time}
            />
        {/each}
    </table>
</div>
