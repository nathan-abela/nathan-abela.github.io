import styled from 'styled-components';

import { Button } from 'Atoms/Buttons';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

function Home() {
	return (
		<>
			{/* eslint-disable-next-line prettier/prettier */}
			<SeoHead
				title="Nathan Abela - Portfolio"
				description="Frontend Engineer with focus on Angular and Stencil.js."
			/>

			<Container>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div style={{ flex: 1 }}>
						<Headline>Nathan Abela</Headline>
						<Subheading>Frontend Engineer</Subheading>
					</div>

					<div style={{ marginTop: 32, marginBottom: 32 }}>
						{/* eslint-disable-next-line prettier/prettier */}
						<Image
							src="/profilePicture.jpg"
							alt="Nathan Abela profile picture"
							width={180}
							height={180}
						/>
					</div>
				</div>
				<p style={{ lineHeight: 1.8 }}>
					I am passionate software engineer from Malta, currently pursuing a Bachelor of Science in Software
					Development. Specialised in frontend development using Angular, StencilJS, and NextJS, and have successfully
					developed mobile apps, built web applications, and designed RESTful APIs. My strong suite of skills includes
					effective communication, problem-solving, and collaboration. Explore my portfolio for a glimpse of my{' '}
					{/* eslint-disable-next-line prettier/prettier */}
					<a
						href="/portfolio"
						title="Portfolio page"
						target="_self"
						rel="noopener noreferrer"
					>
						projects
					</a>
					.
				</p>

				<Button href="/projects">Projects</Button>
			</Container>
		</>
	);
}

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
		height: 120px;
	}

	@media screen and (max-width: 320px) {
		width: 100px;
		height: 100px;
	}
`;

export default Home;
