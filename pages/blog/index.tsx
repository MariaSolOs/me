import styled from 'styled-components';
import { getAllSlugs, getPostFromSlug } from 'lib/blog';
import type { GetStaticProps, NextPage } from 'next';
import type { Post } from 'types/blog';

import Head from 'components/Head';
import NextLink from 'next/link';
import Link from 'components/Link';

const Container = styled.main`
    width: 80%;
    margin: auto;
    
    @media(max-width: ${(props) => props.theme.breakpoints.md}) {
        width: 95%;
    }
`;

const Text = styled.span`
    font-size: 1.2rem;

    @media(max-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: 1rem;
    }
`;

const PostTitle = styled(Link)`
    margin: 1.5rem 0 5px;
    font-size: 1.6rem;
    display: block;
    text-decoration: none;
    
    @media(max-width: ${(props) => props.theme.breakpoints.md}) {
        margin: 1.2rem 0 4px;
        font-size: 1.3rem;
    }
`;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const slugs = await getAllSlugs(true);
    const posts = slugs.map(async (slug) => {
        const { meta } = await getPostFromSlug(slug);
        return meta;
    });

    return {
        props: {
            posts: await Promise.all(posts)
        }
    };
};

type Props = {
    posts: Post['meta'][];
};

const AllPostsPage: NextPage<Props> = (props) => (
    <Container>
        <Head title="Maria Solano's Blog" description="Sometimes I say smart things." />
        <Text>Sometimes I say smart things.</Text>
        <ul>
            {props.posts.map((post, i) => (
                <li key={i}>
                    <NextLink
                        href={{ pathname: '/blog/[slug]', query: { slug: post.title } }}
                        passHref
                        legacyBehavior>
                        <PostTitle>
                            {post.title} - (<Text>{post.date}</Text>)
                        </PostTitle>
                    </NextLink>
                    <i>
                        <Text>{post.preview}</Text>
                    </i>
                </li>
            ))}
        </ul>
    </Container>
);

export default AllPostsPage;
