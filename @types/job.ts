export interface IJob {
	company: string;
	website: string;
	location: string;
	jobTitle: string;
	startDate: string | Date;
	endDate: string | Date | null;
	description: string;
	bullets: string[];
	technologies: string[];
}
