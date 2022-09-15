import { useEffect, useState } from 'react';
import BlogPostCard from './components/BlogPostCard';

function App() {
  const [ blogPosts, setBlogPosts ] = useState([])

  type BlogPostType = {
    id: number
    date: string
    title: any
    featured_media: string
    link: string
    _embedded: any
  }

  useEffect(() => {
    fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
      .then((response) => response.json())
      .then((json: any) => setBlogPosts(json))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <div className="row u-equal-height u-clear-fix" style={{marginTop: "20px"}}>
        {blogPosts?.map((blogPost: BlogPostType) => (
              <BlogPostCard 
                key={blogPost.id}
                authorName={blogPost._embedded?.author[0]?.name}
                authorLink={blogPost._embedded?.author[0]?.link}
                blogCategory={blogPost._embedded?.["wp:term"]?.[2]?.[0]?.name || "Cloud and Server"}
                blogDate={blogPost.date}
                blogLink={blogPost.link}
                blogTitle={blogPost.title.rendered}
                blogType="Article"
                featuredMediaLink={blogPost.featured_media}
              />
          ))}
      </div>
    </>
  );
}

export default App;
