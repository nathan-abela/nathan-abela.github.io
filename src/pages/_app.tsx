import React from 'react';

import { motion } from 'framer-motion';
import { AppProps } from 'next/app';

import { Layout } from 'src/components';

import '@styles/global.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
    <Layout>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            <Component {...pageProps} />
        </motion.div>
    </Layout>
);

export default App;
