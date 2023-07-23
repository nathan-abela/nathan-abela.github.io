import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { fetcher } from 'Utils/fetcher';
import { IEducation } from '@Types/education';

import { Container } from 'Atoms/Container';
import { EducationCard } from 'Atoms/EducationCard';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	education: IEducation[];
}

function Education() {
	const [education, setEducation] = useState<IProps['education']>([]);

	useEffect(() => {
		const getEducation = async () => {
			const data = await fetcher('/api/education');
			setEducation(data.education);
		};

		getEducation();
	}, []);

	const [loadedEducation, setLoadedEducation] = useState(2);

	const loadMore = () => {
		setLoadedEducation((prev: number) => prev + 2);
	};

	return (
		<>
			{/* eslint-disable-next-line prettier/prettier */}
			<SeoHead
				title="Nathan Abela - Portfolio"
				description="Frontend Engineer with focus on Angular and Stencil.js."
			/>

			<Container>
				<ContentWrapper>
					<Headline>Education</Headline>
				</ContentWrapper>

				<MobileCenter>
					{education.slice(0, loadedEducation).map((education, i) => (
						<EducationCard education={education} key={education.course + i} />
					))}

					<Center>{loadedEducation < education.length && <button onClick={loadMore}>Load more</button>}</Center>
				</MobileCenter>
			</Container>
		</>
	);
}

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

const Center = styled.div`
	text-align: center;

	button {
		display: inline-block;
		border: 2px solid transparent;
		color: ${({ theme }) => theme.body};
		padding: 12px 40px;
		border-radius: 4px;
		background: ${({ theme }) => theme.primary};
		text-decoration: none;
		font-weight: 600;
		cursor: pointer;

		&:hover {
			background: ${({ theme }) => `${theme.primary}F2`};
		}
	}
`;

const MobileCenter = styled.div`
	@media screen and (max-width: 425px) {
		text-align: center;
	}
`;

export default Education;
