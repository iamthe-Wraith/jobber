// See https://kit.svelte.dev/docs/types#app

import type { SanityClient } from "@sanity/client";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			sanity: SanityClient;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
