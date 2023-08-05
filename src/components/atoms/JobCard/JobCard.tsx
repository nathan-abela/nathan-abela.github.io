import { FC } from 'react';
import { format } from 'date-fns';

import { IJob } from '@Types';
import { Flex, StyledJobCard } from './styles';

export interface PositionProps {
	job: IJob;
}

const JobCard: FC<PositionProps> = ({ job }) => {
	return (
		<StyledJobCard>
			<Flex>
				<div>
					<strong>{job.jobTitle}</strong> -{' '}
					{job.website ? (
						// eslint-disable-next-line prettier/prettier
						<a
							href={job.website}
							target="_blank"
							rel="noopener noreferrer"
						>
							{job.company}
						</a>
					) : (
						job.company
					)}
				</div>

				<div>
					{format(new Date(job.startDate), 'MMMM yyyy')} -{' '}
					{job.endDate ? format(new Date(job.endDate), 'MMMM yyyy') : 'Present'}
				</div>
			</Flex>

			<small>
				<em>{job.location}</em>
			</small>

			<p>{job.description}</p>

			{job.bullets.length > 0 && (
				<ul style={{ paddingLeft: 16 }}>
					{job.bullets.map((bullet, j) => (
						<li key={j}> &bull; {bullet} </li>
					))}
				</ul>
			)}

			<small>
				<em>
					<strong>Technologies:</strong> {job.technologies.join(', ')}
				</em>
			</small>
		</StyledJobCard>
	);
};

export { JobCard };
