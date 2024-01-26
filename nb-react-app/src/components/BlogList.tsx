import React, { FunctionComponent } from "react";

export interface Blog {
    title: string;
    body: string;
    author: string;
    id: number;
}

interface BlogListProps {
    blogs: Blog[];
    title: string;
    // handleDelete: (id: number) => void;
}
 
const BlogList: FunctionComponent<BlogListProps> = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Writen by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;