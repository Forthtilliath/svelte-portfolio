// Contenu texte des cartes de la sidebar du CV, centralisé pour pouvoir
// l'éditer sans toucher au markup/CSS des composants.

export const phone = '06.60.46.91.19';
export const email = 'vincent.lisita@gmail.com';
export const emailHref = 'mailto:vincent.lisita+cv@gmail.com';
export const addressLines = ["61 rue d'Orgemont", '49000 Angers'];

export interface InformationItem {
	text: string;
	href?: string;
}

export const informations: InformationItem[] = [
	{ text: phone },
	{ text: email, href: emailHref },
	...addressLines.map((text) => ({ text }))
];

export interface InterestItem {
	emoji: string;
	text: string;
}

export const interests: InterestItem[] = [
	{ emoji: '🎲', text: 'Passionné de jeux de société' },
	{ emoji: '🎤', text: 'Chant dans une chorale' }
];

export const personality: string[] = [
	'Adaptabilité',
	'Autonomie',
	'Curiosité',
	'Logique',
	'Rigoureux',
	'Travail en équipe',
	'Patience',
	'Ténacité'
];

export interface LanguageItem {
	name: string;
	level: string;
}

export const languages: LanguageItem[] = [
	{ name: 'Français', level: 'Courant' },
	{ name: 'Anglais', level: 'Intermédiaire' }
];

export const knowhows: string[] = [
	'Réaliser la plonge',
	'Essuyer et ranger la vaisselle',
	'Entretenir un poste de travail',
	'Entretenir des équipements',
	'Dresser les tables',
	'Réaliser la mise en place',
	"Accueillir le client et l'installer",
	'Traiter une commande',
	'Réaliser un service en salle',
	"Encaisser le montant d'une vente",
	'Débarrasser une table',
	'Nettoyer une salle de réception'
];

export const skillsDev: string[] = [
	// Frameworks Frontend
	'JavaScript 🔸 TypeScript',
	'React 🔸 SolidJS 🔸 Svelte v4 & v5',
	// Frameworks Fullstack
	'Next.js 🔸 Sveltekit',
	// Styling
	'SASS 🔸 Tailwind CSS v3 & v4',
	// UI & Components
	'Shadcn UI 🔸 Storybook',
	// Tests
	'Vitest 🔸 Cypress',
	// Backend
	'Prisma 🔸 Supabase',
	'Node.js 🔸 Express',
	// Utils
	'Zod 🔸 Zustand 🔸 Stripe 🔸 i18next',
	// Version Control
	'Git 🔸 GitHub'
];

export const skillsResto: string[] = [
	"Respect des règles d'hygiène",
	'Respect des règles de sécurité',
	"Esprit d'équipe",
	"Sens de l'organisation",
	"Sens de l'hospitalité",
	'Polyvalent',
	'Endurant',
	'Adaptabilité'
];

export const aboutMe: Record<'fullstack' | 'react' | 'sveltekit' | 'resto', string> = {
	fullstack:
		"Après plusieurs années en tant qu'aidant familial, j'ai découvert ma véritable passion pour le développement web. Autodidacte, j'ai consacré les trois dernières années à maîtriser React et à explorer divers frameworks et méta-frameworks, tel que Sveltekit. Mon désir incessant d'apprendre et de m'améliorer m'a conduit à développer des compétences solides en développement front-end.",
	react:
		"Après plusieurs années en tant qu'aidant familial, j'ai découvert ma véritable passion pour le développement web. Autodidacte, j'ai consacré les trois dernières années à maîtriser React et à explorer divers frameworks, tout en développant des compétences en TypeScript, SASS, et Tailwind CSS. Mon désir incessant d'apprendre et de m'améliorer m'a conduit à acquérir des compétences solides en développement front-end.",
	sveltekit:
		"Après plusieurs années en tant qu'aidant familial, j'ai découvert ma véritable passion pour le développement web. Autodidacte, j'ai consacré les deux dernières années à maîtriser Svelte et SvelteKit, tout en explorant d'autres frameworks comme React. Mon désir incessant d'apprendre m'a permis de développer des compétences solides en CSS avec SASS et Tailwind CSS.",
	resto:
		"À la recherche d'un poste saisonnier en tant que plongeur, je suis également ouvert aux opportunités de serveur. Mon expérience en tant qu'aidant familial m'a permis de développer des compétences en communication et en gestion du temps. Motivé et dynamique, je suis prêt à contribuer efficacement à l'équipe."
};

export interface SocialItem {
	key: string;
	label: string;
	href: string;
	displayUrl: string;
	qrSrc: string;
	qrAlt: string;
}

export const socials: SocialItem[] = [
	{
		key: 'portfolio',
		label: 'Portfolio',
		href: 'https://vincent-lisita.vercel.app',
		displayUrl: 'vincent-lisita.vercel.app',
		qrSrc: '/qrcode_pf.png',
		qrAlt: 'qrcode portfolio'
	},
	{
		key: 'linkedin',
		label: 'Linkedin',
		href: 'https://www.linkedin.com/in/vincent-lisita/',
		displayUrl: 'linkedin.com/in/vincent-lisita',
		qrSrc: '/qrcode_ln.png',
		qrAlt: 'qrcode linkedin'
	},
	{
		key: 'github',
		label: 'Github',
		href: 'https://github.com/Forthtilliath',
		displayUrl: 'github.com/Forthtilliath',
		qrSrc: '/qrcode_gh.png',
		qrAlt: 'qrcode github'
	}
];
