import React from 'react';

import { motion } from 'framer-motion';

import styles from '@styles/Home.module.css';
import { Container, Title, Button, Grid, Link, Text } from 'src/components';

function getAge(dateString: string | number | Date) {
    let currDate = new Date();
    let birthDate = new Date(dateString);
    let month = currDate.getMonth() - birthDate.getMonth();
    let age = currDate.getFullYear() - birthDate.getFullYear();

    if (month < 0 || (month === 0 && currDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const Home = (): JSX.Element => (
    <Container>
        <Container
            justifyContent='center'
            alignContent='center'
            alignItems='center'
            textAlign='center'
            paddingY='20px'
            paddingBottom='40px'
            gridGap='4rem'
        >
            <Container alignItems='center' alignContent='center'>
                <img
                    src='/profilePicture.jpg'
                    alt='Nathan Abela'
                    width='160px'
                    height='160px'
                    className={styles.image}
                />
                <Title>Nathan Abela</Title>
                <Title
                    fontSize='2rem'
                    color='rgba(0, 0, 0, 0.7)'
                    fontWeight='500'
                    as='h2'
                >
                    Software Developer
                </Title>
            </Container>
            <Container maxWidth='700px' gridGap='4rem'>
                <Container>
                    <Text textAlign='center'>
                        I am a {getAge('1999/12/25')} year old student who is currently pursuing a Bachelor of
                        Science in Software Development, with experience in Backend,
                        Frontend, and Mobile Development. Projects I have worked on can be
                        viewed on the <a href='/projects'>projects</a> page.
                    </Text>
                </Container>
                <Link href='/about'>
                    <Button>More about me &rarr;</Button>
                </Link>
            </Container>
        </Container>

        <Container alignItems='center' paddingY='4rem'>
            <Container maxWidth='600px' alignItems='center' alignContent='center'>
                <Title fontSize='3rem' as='h3'>
                    Get in touch
                </Title>
                <Text textAlign='center'>
                    Feel free to contact me if you want to get in touch!
                </Text>
                <Grid
                    gridGap='2rem'
                    marginTop='2rem'
                    gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
                    justifyItems='stretch'
                    alignItems='stretch'
                >
                    <Link href='mailto:nathanabela7@gmail.com'>
                        <Button width='100%'>
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
                            </motion.span>{' '}
                            Contact Me
                        </Button>
                    </Link>
                    <Link href='/inprogress'>
                        <Button width='100%' variant='secondary'>
                            Projects &rarr;
                        </Button>
                    </Link>
                </Grid>
            </Container>
        </Container>
    </Container>
);

export default Home;
