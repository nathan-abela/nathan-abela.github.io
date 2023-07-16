import styled from 'styled-components';
import { differenceInYears } from 'date-fns';

import { Container } from 'Atoms/Container';
import { TechnologyIcons } from 'Molecules/TechnologyIcons';

function About() {
    return (
        <>
            <Container>
                <ContentWrapper>
                    <Headline>
                        Hi, I&apos;m Nathan
                        <span>👋</span>
                    </Headline>

                    <Center>
                        <p style={{ lineHeight: 1.8 }}>
                            I am a {differenceInYears(new Date(), new Date('1999-12-25'))}{' '}
                            years old frontend developer from Malta. The technologies I work with are JavaScript, and CSS with a focus on the Angular, Stencil.js, and Next.js frameworks. I am focused on creating high-quality software products with clean user interfaces in mind. I also occasionally do some UI designs, which you can find on my {' '}
                            <a
                                href="/portfolio"
                                title="Portfolio page"
                                target="_self"
                                rel="noopener noreferrer"
                            >
                                projects
                            </a>
                            {' '}page.
                        </p>
                    </Center>

                    <Subheading>Technologies I Frequently Use</Subheading>
                    <TechnologyIcons />

                </ContentWrapper>
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
    font-size: 56px;
    margin: 0;

    span {
        display: inline-block;
    }

    @keyframes wave {
        0% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(-10deg);
        }
        100% {
            transform: rotate(10deg);
        }
    }

    &:hover span {
        animation: wave 0.5s ease infinite;
    }

	@media screen and (max-width: 768px) {
		font-size: 48px;
	}

	@media screen and (max-width: 425px) {
		font-size: 32px;
	}

	@media screen and (max-width: 320px) {
		font-size: 24px;
	}
`;

const Center = styled.div`
	text-align: center;
	margin: 16px 0;
`;

const Subheading = styled.h3`
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

export default About;
