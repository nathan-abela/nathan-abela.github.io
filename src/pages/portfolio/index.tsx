import orderBy from 'lodash.orderby';
import styled from 'styled-components';
import { useState } from 'react';

import { Container } from 'Atoms/Container';
import { FilterButton } from 'Atoms/FilterButton';
import { PortfolioCard } from 'Atoms/PortfolioCard';
import { SeoHead } from 'Atoms/SeoHead';

import { getAllDocuments } from 'Utils/api';

function Portfolio({ portfolioItems }: any) {
	const [selectedType, setSelectedType] = useState('all');

	const filteredItems =
		selectedType === 'all'
			? portfolioItems
			: portfolioItems.filter((item: any) => item.type.toLowerCase().includes(selectedType.toLowerCase()));

	return (
		<>
			{/* eslint-disable-next-line prettier/prettier */}
			<SeoHead
				title="Nathan Abela - Portfolio"
				description="Frontend Engineer with focus on Angular and Stencil.js."
			/>

			<Container>
				<h1 style={{ fontSize: '24px' }}>Portfolio Under Construction 🏗️</h1>
				<p style={{ fontSize: '16px' }}>There are more projects to list, which will be added soon!</p>

				<br></br>
				<hr></hr>

				<Headline>Portfolio</Headline>

				<div style={{ paddingBottom: 32 }}>
					{/* eslint-disable-next-line prettier/prettier */}
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
						onClick={() => setSelectedType('Design and Media Tools')}
						isActive={selectedType.toLowerCase() === 'design and media tools'}
					>
						Design and Media Tools
					</FilterButton>

					{/* eslint-disable-next-line prettier/prettier */}
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

				{/* If no projects are found within a category */}
				{selectedType.toLowerCase() !== 'all' && filteredItems.length === 0 && (
					<>
						<h1 style={{ fontSize: '24px' }}>Category Under Construction 🏗️</h1>
						<p style={{ fontSize: '16px' }}>Projects under this category will be available soon!</p>
					</>
				)}
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const portfolioItems = getAllDocuments('PORTFOLIO', ['title', 'slug', 'type', 'technologies', 'sortOrder']);

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
