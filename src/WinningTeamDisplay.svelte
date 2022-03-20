<script>
    import {getWinningTeam, finishTable} from "./stores.js";
    
    $: winningTeam = getWinningTeam($finishTable)
</script>

<h2>The Winning Team is {winningTeam}</h2>
