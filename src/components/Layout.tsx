import React from 'react';

import Head from 'next/head';

import styles from '@styles/Home.module.css';

import Container from './Container';
import Footer from './Footer';
import Nav from './Nav';

type LayoutProps = {
    children?: React.ReactNode;
    title?: string;
};

const Layout: React.FC<LayoutProps> = ({ title = 'Nathan Abela | Portfolio', children }) => (
    <div className={styles.container}>
        <Head>
            <title>{title}</title>
            <link rel='icon' type='image/x-icon' href='/favicon.ico' />
            <meta charSet='utf-8' />
            <meta name='author' content='Nathan Abela' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta property='og:title' content='Nathan Abela | Portfolio' />
            <meta property='og:type' content='website' />
        </Head>
        <Nav />
        <Container justifyContent='space-between' alignContent='space-between'>
            <main className={styles.main}>{children}</main>
            <Footer />
        </Container>
    </div>
);

export default Layout;
