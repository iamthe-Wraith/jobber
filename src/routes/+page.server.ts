import type { ServerLoad } from "@sveltejs/kit";
import type {InputValue} from '@portabletext/svelte'

const ResourceTypes = {
    Board: 'board',
    Resume: 'resume',
    Interview: 'interview',
    Networking: 'networking',
};

interface IResource {
    name: string;
    url: string;
    resourceType: typeof ResourceTypes[keyof typeof ResourceTypes];
    description: InputValue|undefined;
}

export const load: ServerLoad = async ({ locals }) => {
    const resources: IResource[] = await locals.sanity.fetch('*[_type == "resource"] { name, description, resourceType, url}');
    return { resources, resourceTypes: ResourceTypes };
};