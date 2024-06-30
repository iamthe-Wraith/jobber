<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Jobber</title>
</svelte:head>

{#each data.resources as resource}
    <a href={resource.url} target="_blank">
        <div>
            <h2>{resource.name}</h2>
            <p>{resource.description}</p>
        </div>
    </a>
{/each}
