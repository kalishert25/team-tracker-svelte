<script>
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
    raceName.subscribe((val) => {
        document.title = val;
    });
    function printTable() {
        editableTableNames.set(false);
        var printWindow = window.open(
            "",
            "",
            `height=${Math.floor(innerHeight / 2)},width=${Math.floor(
                innerWidth / 2
            )}`
        );

        //Print the Table CSS.
        printWindow.document.write(
            `<style>
            table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }

            td, th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }
            button.delete-button {
                display: none;
            }
            tr:nth-child(even) {
                background-color: #dddddd;
            }
        </style>
    `
        );
        //Print the DIV contents i.e. the HTML Table.
        printWindow.document.write("<body>");
        var divContents = document.getElementById("finish-div").innerHTML;
        printWindow.document.write(divContents);
        printWindow.document.write("</body>");

        printWindow.document.write("</html>");
        printWindow.document.close();
        printWindow.print();
    }
</script>

<div class="container flex-row d-flex pt-3 px-0">

        {#if $isEditable}
            <Modal>
                <Dialog type="raceform" text="Race Settings" />
            </Modal>
        {/if}
 

    {#if $isRunning}
        <Button
            cls="col-2-lg"
            color="danger"
            on:click={() => {
                isRunning.set(false);
            }}>Stop</Button
        >
    {:else}
        <Button
            cls="col-2-lg"
            color="success"
            on:click={() => {
                isEditable.set(false);
                isRunning.set(true);
            }}>Start</Button
        >
        {#if !$isEditable}
            <Button
                on:click={() => {
                    isEditable.set(true);
                    finishTable.set([]);
                    teams.set([]);
                }}
            >
                Reset
            </Button>
        {/if}
    {/if}
    {#if $finishTable.length > 0 && !$isRunning}
        <Button on:click={printTable}>Print</Button>
        {#if $editableTableNames}
            <Button cls="col-1" on:click={() => editableTableNames.set(false)}
                >Save Names</Button
            >
        {:else}
            <Button on:click={() => editableTableNames.set(true)}
                >Edit Names</Button
            >
        {/if}
    {/if}
</div>
