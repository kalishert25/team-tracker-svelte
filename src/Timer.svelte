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

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<main>
    <h1>{msToTime(t - starting_time)}</h1>
</main>

<style>
    h1 {
        letter-spacing: 3px;
        --col: black;
        /*         border:1px solid var(--col); */
        color: var(--col);
        text-align: center;
        font-size: 6em;
       
    }
</style>
