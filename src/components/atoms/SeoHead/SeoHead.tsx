import { FC } from 'react';
import Head from 'next/head';

export interface HeadProps {
    title: string;
    description: string;
    lang?: string;
    keywords?: string;
    author?: string;
    image?: string;
    meta?: Array<{
        name: string;
        content: string;
    }>;
}

const SeoHead: FC<HeadProps> = ({
    title,
    description,
    author = 'Nathan Abela',
    keywords,
    image = 'https://i.imgur.com/RBCwr3v.png',
    meta,
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:type" content="website" />
            <meta name="og:url" content="https://nathan-abela.github.io/" />
            {meta &&
                meta.length > 0 &&
                meta.map(({ name, content }) => (
                    <meta name={name} content={content} key={name} />
                ))}
            {image && <meta name="og:image" content={image} />}
            {keywords && <meta name="keywords" content={keywords} />}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{"@context":"http://schema.org","@type":"WebSite","name":"nathan-abela.github.io","alternateName":"Nathan Abela","url":"https://nathan-abela.github.io/","description":"Frontend Engineer with focus on Angular and Stencil.js.","image":"${image}"}`,
                }}
            />
        </Head>
    );
};

export { SeoHead };
