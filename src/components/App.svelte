<script>
    import TeamControls from "./TeamControls.svelte";
    import TimerControls from "./TimerControls.svelte";
    import Timer from "./Timer.svelte";

    import {

        finishTable,
        raceLen,
        raceName,

    } from ".../stores.js";
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
    <div class="card view">
        <div class="d-flex justify-content-between">
            <div class="header m-3">
                {$raceName}
            </div>
            <div class="header m-3">
                {$raceLen[0]}
                {$raceLen[1]}
            </div>
        </div>
        <Timer />
        <TeamControls />
    </div>
    
</div>

<style>

    

    .header {
        
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.6em;
    
    }
    .view {
        min-height:100vh;
        background: #F4F5F5;
    }
</style>
