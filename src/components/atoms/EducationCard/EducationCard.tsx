import { FC } from 'react';
import { format } from 'date-fns';

import { IEducation } from '@Types';
import { Flex, StyledEducation } from './styles';

export interface EducationProps {
	education: IEducation;
}

const EducationCard: FC<EducationProps> = ({ education }) => {
	return (
		<StyledEducation>
			<Flex>
				<div>
					<strong>
						{education.website ? (
							// eslint-disable-next-line prettier/prettier
							<a
								href={education.website}
								target="_blank"
								rel="noopener noreferrer"
							>
								{education.course}
							</a>
						) : (
							education.course
						)}
					</strong>
				</div>

				<div>
					{format(new Date(education.startDate), 'yyyy')} - {format(new Date(education.endDate), 'yyyy')}
				</div>
			</Flex>

			<strong>
				<p>
					{education.institute} | {education.location}
				</p>
			</strong>

			<p>{education.description}</p>

			{education.bullets.length > 0 && (
				<ul style={{ paddingLeft: 16 }}>
					{education.bullets.map((bullet, j) => (
						<li key={j}> &bull; {bullet} </li>
					))}
				</ul>
			)}

			{education.technologies.length > 0 && (
				<small>
					<i>
						<strong>Technologies:</strong> {education.technologies.join(', ')}
					</i>
				</small>
			)}
		</StyledEducation>
	);
};

export { EducationCard };
