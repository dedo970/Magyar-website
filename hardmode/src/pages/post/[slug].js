import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Link from "next/link";
export async function getStaticPaths() {
  try {
    const files = fs.readdirSync('public/posts');

    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.md', '')
      }
    }));

    return {
      paths,
      fallback: "blocking"
    };
  } catch (error) {
    console.error(error);

    return {
      paths: [],
      fallback: false
    };
  }
};

export async function getStaticProps ({ params: { slug } }) {
  try {
    const fileName = fs.readFileSync(`public/posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    

    return {
      props: {
        frontmatter,
        content
      }
    };
  } catch (error) {
    console.error(error);

    return {
      props: {}
    };
  }
};

function Post ({ frontmatter, content }) {
  return (
    <>
         <div className="head  w-full">
        <div className="top-bg">
          </div>
    <div className="flex justify-center ">
          {/* <img className="logo" src="/Hardmode-logo.png" /> */}
          <div>
              <h1 className="text-5xl font-extrabold">{frontmatter.title}</h1>
              <Link href="/wiki" className="flex justify-center pt-6">
                  <button className="prihlaska-kkt text-center">back to wiki</button>
              </Link>
          </div>
      </div>
      </div>
      <div className="prose lg:prose-xl prose-invert mx-auto mt-8 text-white p-10">
              <div className="prose mx-auto mt-8 lg:w-1/2">
                  <div className="break-words" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
              </div>
          </div></>
  );
};

export default Post;