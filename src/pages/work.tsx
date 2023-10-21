import { GetStaticProps } from 'next';
import styled from 'styled-components';

import { IJob } from '@Types/job';
import jobsData from './data/jobs.json';

import { Container } from 'Atoms/Container';
import { JobCard } from 'Atoms/JobCard';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	jobs: IJob[];
}

function Work({ jobs }: IProps) {
	return (
		<>
			<SeoHead
				title="Nathan Abela - Portfolio"
				description="Software Engineer with focus on Angular and Stencil.js."
			/>

			<Container>
				<ContentWrapper>
					<Headline>Experience</Headline>
				</ContentWrapper>

				<MobileCenter>
					{jobs.map((job) => (
						<JobCard job={job} key={job.jobTitle} />
					))}
				</MobileCenter>
			</Container>
		</>
	);
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
	const jobs = jobsData.jobs;

	return {
		props: {
			jobs,
		},
	};
};

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const Headline = styled.h2`
	font-size: 40px;
	margin: 32px 0;

	@media screen and (max-width: 768px) {
		font-size: 32px;
	}

	@media screen and (max-width: 425px) {
		font-size: 24px;
	}

	@media screen and (max-width: 320px) {
		font-size: 20px;
	}
`;

const MobileCenter = styled.div`
	@media screen and (max-width: 425px) {
		text-align: center;
	}
`;

export default Work;
