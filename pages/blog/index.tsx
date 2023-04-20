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

const ListItem = styled.li`
    margin: 0 0 1.5rem;
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
        font-size: 1.2rem;
    }
`;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const slugs = await getAllSlugs(true);
    const posts = await Promise.all(slugs.map(async (slug) => {
        const { meta } = await getPostFromSlug(slug);
        return meta;
    }));

    // Sort by date (newest first).
    posts.sort(({ date: date1 }, { date: date2 }) => {
        return new Date(date2).valueOf() - new Date(date1).valueOf();
    });

    return {
        props: { posts }
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
                <ListItem key={i}>
                    <div>
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
                    </div>
                </ListItem>
            ))}
        </ul>
    </Container>
);

export default AllPostsPage;
