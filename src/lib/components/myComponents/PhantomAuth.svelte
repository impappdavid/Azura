<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

    let walletAddress = writable(null);
    let error = writable("");

    async function connectWallet() {
        try {
            if (!window.solana || !window.solana.isPhantom) {
                error.set("Phantom Wallet not found! Install it first.");
                return;
            }

            const response = await window.solana.connect();
            walletAddress.set(response.publicKey.toString());
        } catch (err) {
            error.set("Failed to connect wallet.");
            console.error(err);
        }
    }

    onMount(() => {
        if (window.solana?.isPhantom) {
            window.solana.on("connect", () => {
                walletAddress.set(window.solana.publicKey.toString());
            });
            window.solana.on("disconnect", () => {
                walletAddress.set(null);
            });
        }
    });
    
</script>

{#if $walletAddress}
<a href="#" class=" p-1 w-fit flex gap-2 bg-white/30 backdrop-blur-md items-center rounded-full px-2 pr-3 hover:bg-white/40 transition-all">
    <div class="w-6 h-6 bg-gradient-to-br from-zinc-100 to-red-400 rounded-full"></div>
    <div class="font-body text-xs font-medium">{$walletAddress.slice(0,4)}...{$walletAddress.slice(-4)}</div>
</a>
{:else if $error}
    <button
        on:click={connectWallet}
        class="bg-[#f29f9f] hover:bg-[#e08787] px-3 py-1 font-medium text-white rounded-md font-body flex gap-1 items-center transition-all overflow-x-hidden text-xs"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path
                fill="currentColor"
                d="M5.13 19.2c2.297 0 4.023-1.92 5.053-3.436a2.9 2.9 0 0 0-.195.994c0 .885.53 1.516 1.574 1.516c1.433 0 2.965-1.208 3.758-2.51a2 2 0 0 0-.083.524c0 .617.362 1.006 1.1 1.006c2.324 0 4.663-3.959 4.663-7.421C21 7.175 19.58 4.8 16.016 4.8C9.752 4.8 3 12.154 3 16.905C3 18.771 4.044 19.2 5.13 19.2m8.729-9.622c0-.671.39-1.141.96-1.141c.557 0 .947.47.947 1.14c0 .672-.39 1.155-.947 1.155c-.57 0-.96-.483-.96-1.154m2.979 0c0-.671.39-1.141.96-1.141c.557 0 .947.47.947 1.14c0 .672-.39 1.155-.947 1.155c-.57 0-.96-.483-.96-1.154"
            /></svg
        >
        Connect failed
    </button>
{:else}
    <button
        on:click={connectWallet}
        class="bg-[#ab9ff2] hover:bg-[#9587e0] px-3 py-1 font-medium text-white rounded-md font-body flex gap-1 items-center transition-all"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path
                fill="currentColor"
                d="M5.13 19.2c2.297 0 4.023-1.92 5.053-3.436a2.9 2.9 0 0 0-.195.994c0 .885.53 1.516 1.574 1.516c1.433 0 2.965-1.208 3.758-2.51a2 2 0 0 0-.083.524c0 .617.362 1.006 1.1 1.006c2.324 0 4.663-3.959 4.663-7.421C21 7.175 19.58 4.8 16.016 4.8C9.752 4.8 3 12.154 3 16.905C3 18.771 4.044 19.2 5.13 19.2m8.729-9.622c0-.671.39-1.141.96-1.141c.557 0 .947.47.947 1.14c0 .672-.39 1.155-.947 1.155c-.57 0-.96-.483-.96-1.154m2.979 0c0-.671.39-1.141.96-1.141c.557 0 .947.47.947 1.14c0 .672-.39 1.155-.947 1.155c-.57 0-.96-.483-.96-1.154"
            /></svg
        >
        Connect
    </button>
{/if}
