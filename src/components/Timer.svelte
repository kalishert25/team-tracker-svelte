<script>
    import { isRunning, isEditable, time, msToTime } from "./stores.js";
    let starting_time = 0;
    let t = 0;
    let update;
    let timeBuffer = 0;

    $: time.set(t - starting_time);

    isEditable.subscribe((value) => {
        timeBuffer = 0;
        if (value) {
            starting_time = t;
        }
    });
    // Handles Start and Stop
    isRunning.subscribe((value) => {
        if (value) {
            starting_time = Date.now() - timeBuffer;
            update = setInterval(() => {
                t = Date.now();
            });
        } else {
            timeBuffer = t - starting_time;
            try {
                clearInterval(update);
            } catch (error) {}
        }
    });

    //Utility func to convert raw ms to (HH):MM:SS.sss
</script>

<main>
    <h1>{msToTime(t - starting_time)}</h1>
</main>

<style>
    h1 {
        margin-top: 0.8em;
        font-family: "Barlow";
        font-style: normal;
        font-weight: 500;
        
        color: #1f2d37;
        text-align: center;
        font-size: 5em;
    }
</style>
