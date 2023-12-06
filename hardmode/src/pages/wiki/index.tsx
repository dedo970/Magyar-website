import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Footer from '~/components/footer';
import Header from '~/components/header';

export async function getStaticProps() {
  try {
    const files = fs.readdirSync('public/posts');

    const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`public/posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter
      };
    });

    return {
      props: { posts }
    };
  } catch (error) {
    console.error(error);

    return {
      props: {}
    };
  }
};

function Blog ( posts: { slug: any; frontmatter: any; }[] ) {
  return (
    <>
          <Header/>
    <div className="head  w-full">
      <div className="top-bg">
      </div>
      <div className="flex justify-center text-center ">
        <div>
          <h1 className="text-5xl font-extrabold">Wiki</h1>
          <p className="my-4 text-xl font-bold desc">Návody, rady a tipy</p>
        </div>
      </div>
    </div>

    <div className='page'>
    <div className="inner wiki-grid">
        {posts.map(({ slug, frontmatter }) => (
          <div key={slug} className="">
            <Link href={`/post/${slug}`} legacyBehavior>
              <a className=''>
                <h1 className="title">{frontmatter.title}</h1>
                <p className='desc'>{frontmatter.metaDesc}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
      </div>
      <Footer />
      </>
  );
};

export default Blog;