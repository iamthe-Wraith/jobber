
import type { Handle } from '@sveltejs/kit';
import {createClient} from "@sanity/client";

export const loadSanityClient: Handle = async ({ event, resolve }) => {
    event.locals.sanity = createClient({
        projectId: "7kwflcme",
        dataset: "production",
        apiVersion: "2024-07-05",
        useCdn: false,
    });

    return resolve(event);
};
