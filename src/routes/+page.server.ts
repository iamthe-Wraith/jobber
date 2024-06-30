import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async () => {
    const Resource = {
        Board: 'board',
        Resume: 'resume',
    };

    const resources = [
        {
            name: 'Dynamite Jobs',
            url: 'https://dynamitejobs.com/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'flexjobs',
            url: 'https://www.flexjobs.com/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'GitHub Careers',
            url: 'https://www.github.careers/careers-home',
            description: 'GitHub\'s job board.',
            type: Resource.Board,
        },
        {
            name: 'himalayas',
            url: 'https://himalayas.app/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'Indeed',
            url: 'https://www.indeed.com/',
            description: '',
            type: Resource.Board,
        },
        {
            name: 'Jooble',
            url: 'https://jooble.org/',
            description: 'An aggregator for remote jobs.',
            type: Resource.Board,
        },
        {
            name: 'JS Remotely',
            url: 'https://jsremotely.com/',
            description: 'Remote jobs for JavaScript developers.',
            type: Resource.Board,
        },
        {
            name: 'Just Remote',
            url: 'https://justremote.co/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'Kickresume',
            url: 'https://www.kickresume.com/en/',
            description: 'Create a beautiful resume quickly with the help of artificial intelligence and customizable templates.',
            type: Resource.Resume,
        },
        {
            name: 'NoDesk',
            url: 'https://nodesk.co/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'Pangian',
            url: 'https://pangian.com/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'Remote4Me',
            url: 'https://remote4me.com/',
            description: 'An aggregator for remote jobs.',
            type: Resource.Board,
        },
        {
            name: 'Remote.co',
            url: 'https://remote.co/remote-jobs/developer/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'Remote OK',
            url: 'https://remoteok.io/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'Remotely',
            url: 'https://www.remotely.jobs/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'Remotive',
            url: 'https://remotive.com/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'SolidGigs',
            url: 'https://solidgigs.com/',
            description: 'Freelance jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'Stack Overflow Jobs',
            url: 'https://stackoverflow.jobs/',
            description: 'Powered by Indeed, but since it\'s Stack Overflow, I figured I\'d list it here separately.',
            type: Resource.Board,
        },
        {
            name: 'The Muse',
            url: 'https://www.themuse.com/',
            description: 'Find jobs at companies you love.',
            type: Resource.Board,
        },
        {
            name: 'Toptal',
            url: 'https://www.toptal.com/',
            description: 'Freelance jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'Wah Job Queen',
            url: 'https://www.wahjobqueen.com/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'We Work Remotely',
            url: 'https://weworkremotely.com/',
            description: 'Find jobs that allow you to work remotely.',
            type: Resource.Board,
        },
        {
            name: 'Wellfound',
            url: 'https://wellfound.com/jobs',
            description: 'Connects job seekers with startups.',
            type: Resource.Board,
        },
        {
            name: 'We Work Remotely',
            url: 'https://weworkremotely.com/',
            description: 'Find jobs that allow you to work remotely.',
            type: Resource.Board,
        },{
            name: 'Workew',
            url: 'https://workew.com/',
            description: 'Remote jobs for developers.',
            type: Resource.Board,
        },
        {
            name: 'Working Nomads',
            url: 'https://www.workingnomads.com/jobs',
            description: 'Remote jobs for digital working nomads.',
            type: Resource.Board,
        }
    ]

    return { resources, resourceTypes: Resource };
};