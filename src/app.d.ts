// See https://kit.svelte.dev/docs/types#app

import type { Infer, Schema, SuperValidated } from 'sveltekit-superforms';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	namespace SuperForms {
		type Data<T extends Schema> = SuperValidated<Infer<T>>;
		type Form<T extends Schema> = SuperForm<Infer<T>>;
		type Keys<T extends Schema> = keyof Infer<T>;
	}
}

export {};
