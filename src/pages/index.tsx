import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import { siteConfig } from 'Config/site';

import { IEducation } from '@Types/education';
import { IJob } from '@Types/job';

import educationData from './data/education.json';
import jobsData from './data/jobs.json';

interface IProps {
	education: IEducation[];
	jobs: IJob[];
}

function Home({ education, jobs }: IProps) {
	return (
		<>
			<SeoHead
				title={`${siteConfig.name} - ${siteConfig.jobTitle}`}
				description={siteConfig.description}
				path="/"
			/>

			<Container>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div style={{ flex: 1 }}>
						<Headline>{siteConfig.name}</Headline>
						<Subheading>{siteConfig.jobTitle}</Subheading>
					</div>

					<div style={{ marginTop: 32, marginBottom: 32 }}>
						<Image
							src="/profilePicture.jpg"
							alt={`${siteConfig.name} profile picture`}
							width={180}
							height={180}
						/>
					</div>
				</div>
				<p style={{ lineHeight: 1.8 }}>
					I am a passionate software engineer from Malta, with a {education[0].course}. I
					currently work as a {jobs[0].jobTitle} at{' '}
					<a
						href={jobs[0].website}
						title={jobs[0].company}
						target="_blank"
						rel="noopener noreferrer"
					>
						{jobs[0].company}
					</a>
					, where I specialise in frontend development with TypeScript and Stencil.js.
					Outside work I build and ship side projects with Next.js. My{' '}
					<a
						href="/portfolio"
						title="Portfolio page"
						target="_self"
						rel="noopener noreferrer"
					>
						portfolio
					</a>{' '}
					highlights a range of projects, from shipped side products to academic work. I
					have a strong focus on effective communication, problem-solving, and
					collaborative teamwork.
				</p>

				<Button href="/portfolio">Portfolio</Button>
			</Container>
		</>
	);
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
	const jobs = jobsData.jobs;
	const education = educationData.education;

	return {
		props: {
			jobs,
			education,
		},
	};
};

const Headline = styled.h2`
	font-size: 56px;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 48px;
	}

	@media screen and (max-width: 425px) {
		font-size: 40px;
	}

	@media screen and (max-width: 320px) {
		font-size: 24px;
	}
`;

const Subheading = styled.h3`
	font-size: 32px;
	margin: 0;
	color: ${({ theme }) => theme.text};

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}

	@media screen and (max-width: 320px) {
		font-size: 16px;
	}
`;

const Image = styled.img`
	border-radius: 20%;
	max-width: 100%;
	height: auto;

	@media screen and (max-width: 425px) {
		width: 120px;
	}

	@media screen and (max-width: 320px) {
		width: 100px;
	}
`;

export default Home;
