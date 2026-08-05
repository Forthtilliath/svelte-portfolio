// Contenu texte des cartes de la sidebar du CV, centralisé pour pouvoir
// l'éditer sans toucher au markup/CSS des composants.

export interface InformationItem {
	text: string;
	href?: string;
}

export const informations: InformationItem[] = [
	{ text: '06.60.46.91.19' },
	{ text: 'vincent.lisita@gmail.com', href: 'mailto:vincent.lisita+cv@gmail.com' },
	{ text: "61 rue d'Orgemont" },
	{ text: '49000 Angers' }
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
