<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Jobber</title>
</svelte:head>

<div class="container">
    <h1>Find Your Next Job!</h1>

    <p>Below is a collection of job hunting resources I've collected and wanted to share with people like you.</p>
    <p>Good lunch in your job search!</p>

    <div class="resources">
        {#each data.resources as resource}
            <a
                href={resource.url}
                target="_blank"
                class="resource"
            >
                <p class="h5">{resource.name}</p>
                <p>{resource.description}</p>
            </a>
        {/each}
    </div>
</div>

<style>
    .container {
        width: 94vw;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 0 1rem;

        & p {
            text-align: center;
        }
    }

    .resources {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
    }

    .resource {
        margin-bottom: 1rem;
        padding: 1rem;
        border: 1px solid var(--neutral-200);
        border-radius: 0.5rem;
        background-color: var(--neutral-100);
        text-decoration: none;
        transition: 0.15s ease-in-out;

        &:hover,
        &:focus {
            border: 1px solid var(--neutral-300);
            background-color: var(--neutral-200);
        }
    }

    .resource p {
        margin: 0;
        text-align: center;
    }
</style>