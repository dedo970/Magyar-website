import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';


type ContentType = 'pages' | 'posts';

const root = process.cwd();
const dataFolder = './src/wiki';

export const getFiles = (type: ContentType): any[] => { 
    return fs.readdirSync(path.join(root, dataFolder, type));
}

export const getContentFromFileBySlug = async (type: ContentType, slug: string) => {
    const mdxSource = fs.readFileSync(path.join(root, dataFolder, type, `${slug}.mdx`), 'utf8');

    const {data, content} = await matter(mdxSource);

    const text = await serialize(content, {
    });

    return {
        text,
        metadata: {
            slug,
            ...data,
        }
    }
};

export const getMetadataFromAllFiles = async (type: ContentType) => {
    const files = getFiles(type);

    return files.reduce((allPosts, postSlug) => {
        const mdxSource = fs.readFileSync(path.join(root, dataFolder, type, postSlug), 'utf8');
        const { data } = matter(mdxSource);

        return [
            { ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts
        ];
    }, []);
};