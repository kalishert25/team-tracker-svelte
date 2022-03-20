<script>
	import TeamControls from './TeamControls.svelte';
    import WinningTeamDisplay from "./WinningTeamDisplay.svelte";
    import FinishTable from "./FinishTable.svelte";
    import TimerControls from "./TimerControls.svelte";
    import Runner from "./Runner.svelte";
    import Timer from "./Timer.svelte";
    import Dialog from "./Dialog.svelte";
    import Team from "./Team.svelte";
    import Modal from "svelte-simple-modal";
    import Button from "./Button.svelte";
    import {
        isEditable,
        isRunning,
        finishTable,
        raceLen,
        raceName,
        teams,
        editableTableNames,
    } from "./stores.js";
    $: calculateWinningTeam = () => {
        console.log("ac");
        const team_finishes = {};
        for (let t of $finishTable) {
            team_finishes[t.team_name] = team_finishes[t.team_name] + 1 || 0;
            console.log(team_finishes);
            if (team_finishes[t.team_name] >= 5) {
                return t.team_name;
            }
        }
        return "None";
    };
    raceName.subscribe((val) => {
        document.title = val;
    });
</script>

<div class="container mt-4">
    <TimerControls />
    <div class="card">
        
        <div class="card-header">
            <h1 class="title ">
                <b>{$raceName}
                
            </h1>
            <p  class="mb-1">Distance: {$raceLen[0]}{{ kilometers: "k", meters: "m", miles: "mi" }[
                    $raceLen[1]
                ]}</p>
        </div>
        <Timer />
    </div>
    <TeamControls />
</div>

<style>
</style>
