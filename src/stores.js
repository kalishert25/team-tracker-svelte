import {
    writable
} from 'svelte/store';
export const uniqueId = (length = 16) => {
    return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""))
}
export const isRunning = writable(false);
export const isEditable = writable(true);
export const finishTable = writable([]);
export const raceLen = writable([5, "kilometers"]);
export const raceName = writable("Untitled Race");
export const teams = writable([]);
export const time = writable(0)
export const editableTableNames = writable(true)
export function msToTime(s, include_ms = true) {
    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
        z = z || 2;
        return ("00" + n).slice(-z);
    }

    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;

    return (
        (hrs ? pad(hrs) + ":" : "") +
        pad(mins) +
        ":" +
        pad(secs) +
        (include_ms ? ("." + pad(ms, 3)) : '')
    );
}
// FIXME 
export const getWinningTeam = (ft) => {
    const getMax = object => {
        return Object.keys(object).filter(x => {
            return object[x] == Math.max.apply(null,
                Object.values(object));
        });
    };
    console.log(ft)
    const teamScores = {}
    for (let runner of ft) {
        if (teamScores[runner.team_name] == undefined) {
            teamScores[runner.team_name] = []
        }
        teamScores[runner.team_name].push(ft.length)


    }
    let max = 0
    if (ft.length > 0) {
        console.log(getMax(teamScores), teamScores)
    }


    return "Noone"
}
export const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16)).join(', ')
