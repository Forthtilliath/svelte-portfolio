// Contenu des blocs "expérience" du CV (formations, projets), centralisé
// pour pouvoir l'éditer sans toucher au markup/CSS de training-section.svelte.

export interface TrainingDescriptionItem {
	label?: string;
	text: string;
}

export interface TrainingEntryData {
	date: string;
	/** Précision affichée sous la date, ex. "(en cours)", "(3 mois)". */
	dateNote?: string;
	title: string;
	subtitle?: string;
	location?: string;
	/** Un paragraphe, ou une liste à puces (avec ou sans label en gras). */
	description?: string | (string | TrainingDescriptionItem)[];
}

export const professionalTrainingDev: TrainingEntryData[] = [
	{
		date: '2012 - 2013',
		title: 'Licence professionnelle',
		subtitle: 'Logiciels libres et propriétaires',
		location: "Université d'Angers, Angers"
	},
	{
		date: '2005 - 2007',
		title: 'Brevet Technicien Supérieur',
		subtitle: 'Informatique de Gestion',
		location: 'Lycée Douanier Rousseau, Laval'
	}
	// Masqué du CV, gardé pour référence :
	// { date: '2005', title: 'Baccalauréat, Sciences et Technologie Tertiaire',
	//   subtitle: 'Informatique et Gestion', location: 'Lycée Douanier Rousseau, Laval' }
];

export const professionalTrainingResto: TrainingEntryData[] = [
	{
		date: 'Déc. 2025',
		dateNote: '(en cours)',
		title: 'Employé Polyvalent de Restauration',
		location: "Sodexo Clinique de l'Anjou, Angers",
		description: [
			'Effectuer la plonge vaisselle et batterie pendant le service.',
			'Assurer la préparation et le montage des plateaux repas des patients selon les régimes alimentaires prescrits, pour la distribution en chambre.',
			'Préparer et approvisionner les dotations alimentaires des services et des chambres.',
			'Assurer la production des préparations froides.',
			'Assurer le service en self-service pour le personnel.',
			"Veiller à la traçabilité des produits et au respect des normes d'hygiène alimentaire (HACCP).",
			"Effectuer l'entretien et le nettoyage des locaux."
		]
	},
	{
		date: '2019',
		dateNote: '(3 mois)',
		title: 'Plongeur en Restauration',
		location: 'Groupe Barrière, La Baule',
		description: [
			'Assurer le nettoyage des matériels et locaux.',
			"Assurer le stockage et l'approvisionnement en vaisselle des différents points de vente."
		]
	},
	{
		date: '2013 et 2007',
		dateNote: '(10 jours)',
		title: 'Service Restauration',
		location: 'Les Choralies, Vaison-la-Romaine',
		description: [
			'Assurer la distribution du plat du jour.',
			"Assurer le stockage et l'approvisionnement en aliments des différents points de distribution."
		]
	},
	{
		date: '2012',
		dateNote: '(2 mois)',
		title: 'Equipier Polyvalent de Restauration',
		location: "Crèperie La Côte d'Amour, Le Croisic",
		description: [
			'Accueillir les clients et assurer le service en salle (prise de commande, service, encaissement).',
			'Participer à la mise en place et au rangement de la salle.',
			'Assurer le nettoyage des matériels et des locaux.'
		]
	}
];

export const selfTaughtTraining: TrainingEntryData[] = [
	{
		date: '2022',
		title: 'JavaScript, TypeScript, React, MERN Stack',
		description:
			'Maîtrise de JavaScript, TypeScript, et spécialisation React. Initiation au développement full-stack avec MongoDB, Express.js, et Node.js.'
	},
	{
		date: '2023',
		title: 'SolidJS, Next.js & Tailwind CSS',
		description:
			"Découverte d'un framework lié à React, SolidJS, ainsi que d'un meta-framework lié à React, Next.js, enrichie par l'intégration de Tailwind CSS pour faciliter le travail en équipe grâce à son système de classes utilitaires."
	},
	{
		date: '2024',
		title: 'SvelteKit',
		description: 'Exploration de SvelteKit pour développer des applications web plus réactives.'
	}
];

export const completedProjects: TrainingEntryData[] = [
	{
		date: '2023',
		title: 'Application mobile - 7 Wonders: Assistant',
		description: [
			{ label: 'Technologies principales', text: 'React, TypeScript, Tailwind CSS.' },
			{
				label: "Gestion de l'état",
				text: "Utilisation de Zustand pour la gestion de l'état de l'application."
			},
			{
				label: 'Internationalisation',
				text: "Mise en œuvre de l'internationalisation dans une application à l'aide de i18next et react-i18next."
			},
			{
				label: 'Tests',
				text: "Mise en place d'une suite de tests pour assurer la qualité de l'application à l'aide de bibliothèques de tests comme Jest et Testing Library."
			},
			{
				label: 'Formatage du code',
				text: 'Utilisation de Prettier et ESLint pour assurer la cohérence et la qualité du code.'
			},
			{
				label: 'Travail en équipe et gestion de projet',
				text: "Expérience de travail en équipe et utilisation de bonnes pratiques de gestion de projet, comme illustré par l'utilisation de conventions de commit spécifiques."
			}
		]
	}
];
