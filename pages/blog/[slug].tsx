import { getAllSlugs, getPostFromSlug } from 'lib/blog';
import styled from 'styled-components';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { RoutedQuery } from 'nextjs-routes';
import type { Post } from 'types/blog';

import Head from 'components/Head';
import Markdown from 'markdown-to-jsx';

const Container = styled.article`
    width: 90%;
    margin: 30px auto;
`;

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
    const slugs = await getAllSlugs(false);

    return {
        paths: slugs.map((slug) => ({
            params: { slug }
        })),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<Props, UrlQuery> = async (context) => {
    const slug = context.params!.slug;
    const post = await getPostFromSlug(`${slug}.md`);

    return {
        props: { post }
    };
};

type UrlQuery = RoutedQuery<'/blog/[slug]'>;

type Props = {
    post: Post;
};

const PostPage: NextPage<Props> = (props) => {
    const { meta, content } = props.post;
    return (
        <>
            <Head title={meta.title} description={meta.preview} />
            <Markdown options={{ wrapper: Container, forceWrapper: true }}>
                {`# ${meta.title}\n####_${meta.date}_
                ${content}`}
            </Markdown>
        </>
    );
};

export default PostPage;
