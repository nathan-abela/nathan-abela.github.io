import React from 'react';

import { motion } from 'framer-motion';
import Head from 'next/head';
import {
    SiC,
    SiCsharp,
    SiJava,
    SiJavascript,
    SiMicrosoftsqlserver,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiTypescript
} from 'react-icons/si';

import { Title, Text, Container, Grid, Link, Card } from '@components';

const About = (): JSX.Element => {
    const stacks = React.useMemo(
        () => [
            {
                Icon: SiPython,
                url: 'https://www.python.org',
            },
            {
                Icon: SiCsharp,
                url: 'https://docs.microsoft.com/dotnet/csharp',
            },
            {
                Icon: SiC,
                url: 'https://docs.microsoft.com/cpp/c-language',
            },
            {
                Icon: SiJava,
                url: 'https://www.java.com',
            },
            {
                Icon: SiNodedotjs,
                url: 'https://nodejs.org',
            },
            {
                Icon: SiJavascript,
                url: 'https://www.javascript.com',
            },
            {
                Icon: SiTypescript,
                url: 'https://www.typescriptlang.org',
            },
            {
                Icon: SiReact,
                url: 'https://reactjs.org',
            },
            {
                Icon: SiNextdotjs,
                url: 'https://nextjs.org',
            },
            {
                Icon: SiMicrosoftsqlserver,
                url: 'https://www.microsoft.com/sql-server',
            }
        ],
        [],
    );

    return (
        <Container>
            <Head>
                <title>About</title>
            </Head>
            <Container alignContent="center" alignItems="center">
                <Title fontSize={['3rem', '4rem']} as="h2">
                    Hi, I&apos;m Nathan {''}
                    <motion.span
                        initial={{ display: 'inline-block' }}
                        animate={{ rotate: [0, 15, -5, 15, -5, 10, 0, 0] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 2,
                        }}
                    >
                        👋
                    </motion.span>
                </Title>
                <Container maxWidth={['100%', '700px']} marginY="2rem">
                    <Text textAlign='center'>
                        I&apos;m a Software Developer from Malta. Focused on creating high-quality
                        software products with clean user interfaces in mind.
                        I also occasionally do some UI/Infographic designs, which you can find on my {''}
                        <a href='/projects'>projects</a> page.
                    </Text>
                </Container>
            </Container>

            <Container
                paddingY="4rem"
                gridGap="2rem"
                alignContent="center"
                alignItems="center"
                textAlign="center"
                width="100%"
            >
                <Title fontSize="40px" as="h2">
                    Technologies I Frequently Use
                </Title>
                <Grid
                    gridTemplateColumns={['repeat(3, 1fr)', 'repeat(5, 1fr)']}
                    gridGap="1rem"
                    justifyItems="center"
                    maxWidth="40rem"
                >
                    {stacks.map(({ Icon, url }, i) => (
                        <Link href={url} key={url}>
                            <Card key={i}>
                                <Icon size="2rem" />
                            </Card>
                        </Link>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default About;
