 import { groq } from 'next-sanity';
import { client } from '../../../../../lib/sanity.client';
import BlogList from '../../../../../components/Blog/BlogList';


export const revalidate = 60;

type Props = {
    params: {
      category: string;
    };
  };


async function HomePage({ params }: Props) {
    const query = groq`
    *[_type=='post'] { //all the post data
      ...,            // all the fields
      author->,       //author reference with {}
      category->,
  } | order(_createdAt desc) // ordering by descending
  `;
  

  const posts: Post[] = (await client.fetch(query)).filter((post: Post): Boolean => post.category.title.toString().toLocaleLowerCase() === params.category);
 
  
  return (
    <div className=''>
      <BlogList posts={posts} />
    </div>
  );
}

export default HomePage;