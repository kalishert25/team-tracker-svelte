<script>
	import FinishTable from './components/FinishTable.svelte';
    import {
        isEditable,
        isRunning,
        finishTable,
        raceLen,
        raceName,
        teams,
        editableTableNames,
    } from "./stores.js";
import Team from './components/Team.svelte';
</script>

<div class="mt-3">
    <div class="card-header mb-3">
        <h3 class="title ">Teams</h3>
    </div>

    <div class="flex-container row mx-1">
        {#each $teams as team}
            <Team id={team.id} name={team.name} color={team.color} />
        {/each}
    </div>
    <!-- <WinningTeamDisplay /> -->
    <FinishTable />
</div>
