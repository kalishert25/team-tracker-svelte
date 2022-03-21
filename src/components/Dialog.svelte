<script>
    import Button from "./Button.svelte";
    import { getContext } from "svelte";
    import RaceForm from "./RaceForm.svelte";
    const { open } = getContext("simple-modal");
    export let type = "confirm"
    export let text=""
    const openDialog = () => {
        open(type == "confirm" ? ConfirmationBox : RaceForm);
    };
</script>

<Button cls="col-2-lg" color="primary" on:click={openDialog}>{text}</Button>
