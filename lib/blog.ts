import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import type { Post } from 'types/blog';

/**
 * @param includeExtension - Whether to include the `.md` extension in the returned slugs.
 * @returns An array with all post slugs.
 */
export const getAllSlugs = async (includeExtension: boolean) => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const fileNames = await fs.readdir(postsDirectory);

    return fileNames.map((fileName) => {
        if (includeExtension) {
            return fileName;
        } else {
            return fileName.replace(/\.md$/, '');
        }
    });
};

/**
 * @param slug - The post's slug (including `.md` extension)
 * @returns The corresponding blog post.
 */
export const getPostFromSlug = async (slug: string) => {
    const postPath = path.join(process.cwd(), 'posts', slug);
    const fileContents = await fs.readFile(postPath, 'utf-8');
    const { data, content } = matter(fileContents);

    return {
        meta: data,
        content
    } as Post;
};
