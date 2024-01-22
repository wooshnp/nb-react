import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([ 
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'peach', id: 3},
        { title: 'Web dev tops tools', body: 'lorem ipsum...', author: 'luigi', id: 2},
     ]);


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Writen by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;