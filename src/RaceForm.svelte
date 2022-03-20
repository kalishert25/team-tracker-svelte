<script>
    import { teams, raceLen, raceName } from "./stores.js";
    let teamInterface = false;
    let r_len = $raceLen[0];
    let unit_multiplier = $raceLen[1];
    $: {
        raceLen.set([r_len ?? 1, unit_multiplier]);
        console.log($raceLen);
    }
    let currTeamName;
    let currTeamCol;
    function addTeam() {
        const newTeam = new Team(currTeamName, currTeamCol)
        function Team(name, color) {
            this.name = name;
            this.color = color;
        }

        teamInterface = false;
        teams.set([...$teams, newTeam]);
    }
</script>

<h2>{$teams.length ? "Teams: " : ''}{$teams.map(team => team.name).join(", ")}</h2>

<form>
    <div class="flex-container">
        <label for="n">Race name:</label>
        <input id="n" class="form-control mx-1" bind:value={$raceName} />
        <label for="l" class="form-label">Distance:</label>
        <div class="row flex-container mx-1">
            <input
                id="l"
                class="form-control col-3"
                type="number"
                min="1"
                bind:value={r_len}
            />
            <select
                class="form-control col-3 mx-2 "
                bind:value={unit_multiplier}
            >
                <option value="kilometers">kilometers</option>
                <option value="miles">miles</option>
                <option value="meters">meters</option>
            </select>
            <button
                class="btn btn-primary col "
                on:click|preventDefault={() => {
                    teamInterface = true
                    currTeamName = "Untitled Team";
                    currTeamCol = Math.floor(Math.random()*16777215).toString(16);
                }}>Add Team</button
            >
        </div>
    </div>
</form>
{#if teamInterface}
<hr />
    <form class="flex-container">
        <div class="row flex-container mx-1">
            <div class="col-sm-8 px-sm-0">
                <label for="t" class="form-label">Team Name:</label>
                <input class="form-control" id="t" bind:value={currTeamName} />
            </div>
            <div class="col-sm-2">
                <label for="c" class="form-label">Color:</label>
                <input
                    bind:value={currTeamCol}
                    id="c"
                    type="color"
                    class="form-control col"
                    style=""
                />
            </div>

            <button
                style="height:50%;margin-top:2em;"
                class="btn btn-success col"
                on:click|preventDefault={addTeam}
                >Save</button
            >
        </div>
    </form>
    
{/if}
