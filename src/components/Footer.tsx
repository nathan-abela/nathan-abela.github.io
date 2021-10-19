import React from 'react';

import { MdMail } from 'react-icons/md';
import { SiGithub, SiYoutube, SiLinkedin } from 'react-icons/si';
import styled from 'styled-components';

import Container from './Container';
import Grid from './Grid';
import Link from './Link';
import Text from './Text';

const StyledFooter = styled.footer`
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 100px;
    padding: 60px 20px 100px;
`;

const FooterGrid = styled.div`
    display: grid;
    justify-content: center;

    margin-top: 20px;
    margin-bottom: 30px;

    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
`;

const Footer = (): JSX.Element => {
    const links = React.useMemo(
        () => [
            {
                url: 'https://github.com/nathan-abela',
                icon: SiGithub,
            },
            {
                url: 'https://www.youtube.com/channel/UCSmoiptI7hDaPiMq6nu4Yzg',
                icon: SiYoutube,
            },
            {
                url: 'mailto:nathanabela7@gmail.com',
                icon: MdMail,
            },
            {
                url: 'https://linkedin.com/in/nathan-abela',
                icon: SiLinkedin,
            },
        ],
        []
    );

    return (
        <StyledFooter>
            <Container paddingY='25px'>
                <Grid gridGap='30px'>
                    <Link href='/'>Home</Link>
                    <Link href='/inprogress'>About</Link>
                    <Link href='/inprogress'>Projects</Link>
                    <Link href='mailto:nathanabela7@gmail.com'>Contact</Link>
                </Grid>
            </Container>
            <FooterGrid>
                {links.map(({ url, icon: Icon }) => (
                    <Link key={url} target='_blank' opacity={0.7} href={url}>
                        <Icon size={24} />
                    </Link>
                ))}
            </FooterGrid>
            <Text margin={0} fontSize='0.9rem' color='rgba(0, 0, 0, 0.7)'>
                © {new Date().getFullYear()} Nathan Abela
            </Text>
        </StyledFooter>
    );
};

export default Footer;
