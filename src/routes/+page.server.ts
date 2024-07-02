import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async () => {
    const ResourceTypes = {
        Board: 'board',
        Resume: 'resume',
    };

    const resources = [
        {
            name: '4 day week',
            url: 'https://4dayweek.io/',
            description: 'Find jobs that offer a 4 day work week.',
            type: ResourceTypes.Board,
        },
        {
            name: 'awesome-job-boards',
            url: 'https://github.com/tramcar/awesome-job-boards?tab=readme-ov-file',
            description: 'A curated list of job boards.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Berlin Startup Jobs',
            url: 'https://berlinstartupjobs.com/',
            description: 'Find jobs at startups in Berlin.',
            type: ResourceTypes.Board,
        },
        {
            name: 'ClimateTechList',
            url: 'https://www.climatetechlist.com/',
            description: 'Find a job at one of thousands of high-impact climate & clean tech companies.',
            type: ResourceTypes.Board
        },
        {
            name: 'coolstartupjobs',
            url: 'https://www.coolstartupjobs.com/',
            description: 'Find a job at the next big startup.',
            type: ResourceTypes.Board,  
        },
        {
            name: 'DailyRemote',
            url: 'https://dailyremote.com/',
            description: 'Find the best remote jobs, work from home jobs, and digital nomad jobs in over 15 categories.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Devremote',
            url: 'https://devremote.io/',
            description: 'Connecting the world\'s best developers with top remote companies, striving to create ample opportunity for all.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Dynamite Jobs',
            url: 'https://dynamitejobs.com/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Findwork',
            url: 'https://findwork.dev/',
            description: 'Aggregation of remote jobs for developers from many different sources.',
            type: ResourceTypes.Board,
        },
        {
            name: 'flexjobs',
            url: 'https://www.flexjobs.com/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'GitHub Careers',
            url: 'https://www.github.careers/careers-home',
            description: 'GitHub\'s job board.',
            type: ResourceTypes.Board,
        },
        {
            name: 'himalayas',
            url: 'https://himalayas.app/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Indeed',
            url: 'https://www.indeed.com/',
            description: '',
            type: ResourceTypes.Board,
        },
        {
            name: 'JavaScript Jobs',
            url: 'https://javascriptjob.xyz/',
            description: 'Find all kinds of Javascript jobs.',
            type: ResourceTypes.Board
        },
        {
            name: 'Javascript Works',
            url: 'https://javascript.works-hub.com/',
            description: 'Find JavaScript jobs.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Jobs in JS',
            url: 'https://jobsinjs.com/',
            description: 'Find JavaScript jobs all around the world.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Jooble',
            url: 'https://jooble.org/',
            description: 'An aggregator for remote jobs.',
            type: ResourceTypes.Board,
        },
        {
            name: 'JsJobbs',
            url: 'https://jsjobbs.com/',
            description: 'Find the best JavaScript jobs at leading companies.',
            type: ResourceTypes.Board
        },
        {
            name: 'JS Remotely',
            url: 'https://jsremotely.com/',
            description: 'Remote jobs for JavaScript developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Just Remote',
            url: 'https://justremote.co/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Kickresume',
            url: 'https://www.kickresume.com/en/',
            description: 'Create a beautiful resume quickly with the help of artificial intelligence and customizable templates.',
            type: ResourceTypes.Resume,
        },
        {
            name: 'levels.fyi',
            url: 'https://www.levels.fyi/jobs',
            description: 'Find developer jobs and also how much you should be making.',
            type: ResourceTypes.Board,
        },
        {
            name: 'MarketRemotely',
            url: 'https://marketremotely.com/',
            description: 'Remote marketing jobs from all over the internet.',
            type: ResourceTypes.Board,
        },
        {
            name: 'NoDesk',
            url: 'https://nodesk.co/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'okjob',
            url: 'https://okjob.io/',
            description: 'A global job board for 4 day work week (32 hr) jobs. Listing positions in engineering, finance, marketing, sales, management and more.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Pangian',
            url: 'https://pangian.com/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'React Jobs',
            url: 'https://reactjsjob.com/',
            description: 'Find React jobs.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Relocate Me',
            url: 'https://relocate.me/',
            description: 'Niche job board for techies looking to relocate.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Remote4Me',
            url: 'https://remote4me.com/',
            description: 'An aggregator for remote jobs.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Remote|ok',
            url: 'https://remoteok.com/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Remote.co',
            url: 'https://remote.co/remote-jobs/developer/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'RemoteFR',
            url: 'https://remotefr.com/',
            description: 'The first French site dedicated to 100% remote jobs.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Remote OK',
            url: 'https://remoteok.io/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Remotely',
            url: 'https://www.remotely.jobs/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Remotive',
            url: 'https://remotive.com/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'SolidGigs',
            url: 'https://solidgigs.com/',
            description: 'Freelance jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Stack Overflow Jobs',
            url: 'https://stackoverflow.jobs/',
            description: 'Powered by Indeed, but since it\'s Stack Overflow, I figured I\'d list it here separately.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Startup Jobs',
            url: 'https://startup.jobs/',
            description: 'Find jobs at startups.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Svelte Jobs',
            url: 'https://sveltejobs.com/',
            description: 'Find companies looking to hire Svelte developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'The Muse',
            url: 'https://www.themuse.com/',
            description: 'Find jobs at companies you love.',
            type: ResourceTypes.Board,
        },
        {
            name: 'The Remote Work',
            url: 'https://theremotework.co/',
            description: 'TheRemoteWork aggregates remote jobs through different sources and presents with the best filters for you.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Toptal',
            url: 'https://www.toptal.com/',
            description: 'Freelance jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Typescript Jobs',
            url: 'https://typescriptjobs.dev/',
            description: 'Find TypeScript jobs.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Upwork',
            url: 'https://www.upwork.com/',
            description: 'A place for companies to find You for that next job.',
            type: ResourceTypes.Board,
        },
        {
            name: 'VueJobs',
            url: 'https://vuejobs.com/',
            description: 'Discover companies looking to hire Vue.js developers and connect with them.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Wah Job Queen',
            url: 'https://www.wahjobqueen.com/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'We Work Remotely',
            url: 'https://weworkremotely.com/',
            description: 'Find jobs that allow you to work remotely.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Wellfound',
            url: 'https://wellfound.com/jobs',
            description: 'Connects job seekers with startups.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Werkington',
            url: 'https://www.werkington.com/',
            description: 'Find and apply to remote jobs.',
            type: ResourceTypes.Board,
        },
        {
            name: 'We Work Remotely',
            url: 'https://weworkremotely.com/',
            description: 'Find jobs that allow you to work remotely.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Who is Hiring?',
            url: 'https://whoishiring.io/',
            description: 'Find jobs in tech.',
            type: ResourceTypes.Board
        },
        {
            name: 'Work in biotech',
            url: 'https://workinbiotech.com/',
            description: 'Find jobs in biotech.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Workew',
            url: 'https://workew.com/',
            description: 'Remote jobs for developers.',
            type: ResourceTypes.Board,
        },
        {
            name: 'Working Nomads',
            url: 'https://www.workingnomads.com/jobs',
            description: 'Remote jobs for digital working nomads.',
            type: ResourceTypes.Board,
        },
        {
            name: 'workingreen',
            url: 'https://workingreen.jobs/',
            description: 'Find your job in climate.',
            type: ResourceTypes.Board,
        }
    ]

    return { resources, resourceTypes: ResourceTypes };
};