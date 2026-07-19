import orderBy from 'lodash.orderby';
import styled from 'styled-components';
import { useState } from 'react';

import { Container } from 'Atoms/Container';
import { FilterButton } from 'Atoms/FilterButton';
import { PortfolioCard } from 'Atoms/PortfolioCard';
import { SeoHead } from 'Atoms/SeoHead';
import { siteConfig } from 'Config/site';

import { getAllDocuments } from 'Utils/api';

function Portfolio({ portfolioItems }: any) {
	const [selectedType, setSelectedType] = useState('all');

	const filteredItems =
		selectedType === 'all'
			? portfolioItems
			: portfolioItems.filter((item: any) =>
					item.type.toLowerCase().includes(selectedType.toLowerCase())
			  );

	return (
		<>
			<SeoHead
				title={`Portfolio - ${siteConfig.name}`}
				description={`Selected projects by ${siteConfig.name}: web apps, mobile apps, and machine learning experiments.`}
				path="/portfolio"
			/>

			<Container>
				<Headline>Portfolio</Headline>

				<div style={{ paddingBottom: 32 }}>
					<FilterButton
						onClick={() => setSelectedType('all')}
						isActive={selectedType === 'all'}
					>
						All Projects
					</FilterButton>

					<FilterButton
						onClick={() => setSelectedType('Frontend Development')}
						isActive={selectedType.toLowerCase() === 'frontend development'}
					>
						Frontend Development
					</FilterButton>

					<FilterButton
						onClick={() => setSelectedType('Backend Development')}
						isActive={selectedType.toLowerCase() === 'backend development'}
					>
						Backend Development
					</FilterButton>

					<FilterButton
						onClick={() => setSelectedType('Machine Learning')}
						isActive={selectedType.toLowerCase() === 'machine learning'}
					>
						Machine Learning
					</FilterButton>

					<FilterButton
						onClick={() => setSelectedType('Mobile App Development')}
						isActive={selectedType.toLowerCase() === 'mobile app development'}
					>
						Mobile App Development
					</FilterButton>

					<FilterButton
						onClick={() => setSelectedType('3D Modelling')}
						isActive={selectedType.toLowerCase() === '3d modelling'}
					>
						3D Modelling
					</FilterButton>

					<FilterButton
						onClick={() => setSelectedType('Game Development')}
						isActive={selectedType.toLowerCase() === 'game development'}
					>
						Game Development
					</FilterButton>

					<FilterButton
						onClick={() => setSelectedType('Design and Media')}
						isActive={selectedType.toLowerCase() === 'design and media'}
					>
						Design and Media
					</FilterButton>

					<FilterButton
						onClick={() => setSelectedType('Other')}
						isActive={selectedType.toLowerCase() === 'other'}
					>
						Other
					</FilterButton>
				</div>

				{filteredItems.map((item: any) => (
					<PortfolioCard item={item} key={item.slug} />
				))}

				{selectedType.toLowerCase() !== 'all' && filteredItems.length === 0 && (
					<p style={{ fontSize: '16px' }}>No projects in this category yet.</p>
				)}
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const portfolioItems = getAllDocuments('PORTFOLIO', [
		'title',
		'slug',
		'type',
		'technologies',
		'sortOrder',
	]);

	const sortedItems = orderBy(portfolioItems, ['sortOrder'], ['asc']);

	return {
		props: { portfolioItems: sortedItems },
	};
}

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

export default Portfolio;
