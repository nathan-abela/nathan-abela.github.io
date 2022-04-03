import React from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import Container from './Container';
import Grid from './Grid';

const states: { [key: string]: React.CSSProperties } = {
    '/': {
        left: '8px',
        width: '58px',
    },
    '/about': {
        left: '84px',
        width: '60px',
    },
    '/education': {
        left: '84px',
        width: '60px',
    },
    '/work': {
        left: '160px',
        width: '56px',
    },
    '/projects': {
        left: '234px',
        width: '70px',
    },
};

const NavLink = styled.a`
    font-weight: 500;

    z-index: 1;

    margin: 0;
    padding: 0;

    cursor: pointer;
    transition: opacity 0.25s ease 0s;
    text-decoration: none;

    color: inherit;
    border-bottom: none;

    &:hover {
        opacity: 0.6;
    }
`;

const Nav = (): JSX.Element => {
    const router = useRouter();
    let navStyle = states['/'];

    if (router.asPath !== '/') {
        for (const path of Object.keys(states).slice(1)) {
            if (router.asPath.startsWith(path)) {
                navStyle = states[path];
                break;
            }
        }
    }

    return (
        <Grid
            as='nav'
            alignContent='center'
            justifyContent='space-between'
            my='2rem'
            gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
        >
            <Container display={['none', 'none', 'flex']}>
                <NavLink href='/'>Nathan Abela</NavLink>
            </Container>
            <Container alignContent='center'>
                <Grid
                    width='fit-content'
                    gridGap='2rem'
                    alignItems='center'
                    justifyItems='center'
                    gridTemplateColumns='repeat(5, auto)'
                    style={{
                        borderRadius: '26px',
                        background: 'rgba(0, 0, 0, 0.04)',
                        padding: '16px',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            background: 'white',
                            position: 'absolute',
                            borderRadius: '26px',
                            height: '80%',
                            ...navStyle,
                        }}
                    />
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/about'>About</NavLink>
                    <NavLink href='/inprogress'>Education</NavLink>
                    <NavLink href='/inprogress'>Work</NavLink>
                    <NavLink href='/inprogress'>Projects</NavLink>
                </Grid>
            </Container>
            <Container alignContent='flex-end' display={['none', 'none', 'flex']}>
                <NavLink href='mailto:nathanabela7@gmail.com'>Contact</NavLink>
            </Container>
        </Grid>
    );
};

export default Nav;
