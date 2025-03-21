<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    export let time = { hours: 0, minutes: 0, seconds: 10 };

    let interval:any;
    let hours = time.hours;
    let minutes = time.minutes;
    let seconds = time.seconds;
    function startCountdown() {
        interval = setInterval(() => {
            if (hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(interval);
                return;
            }

            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        }, 1000);
    }

    onMount(() => {
        startCountdown();
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<span>
    {String(hours).padStart(2, "0")}:
    {String(minutes).padStart(2, "0")}:
    {String(seconds).padStart(2, "0")}
</span>
