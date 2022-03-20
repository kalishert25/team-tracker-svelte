<script>
	import FinishTable from './FinishTable.svelte';
    import {
        isEditable,
        isRunning,
        finishTable,
        raceLen,
        raceName,
        teams,
        editableTableNames,
    } from "./stores.js";
import Team from './Team.svelte';
</script>

<div class="mt-3">
    <div class="card-header mb-3">
        <h3 class="title ">Teams</h3>
    </div>

    <div class="flex-container row mx-1">
        {#each $teams as team}
            <Team name={team.name} color={team.color} />
        {/each}
    </div>
    <!-- <WinningTeamDisplay /> -->
    <FinishTable />
</div>
