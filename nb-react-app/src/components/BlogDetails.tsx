import { FunctionComponent } from "react";
import { withRouter, RouteComponentProps, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Blog } from "./BlogList";

interface BlogDetailsProps extends RouteComponentProps<{id: string}> {}
 
const BlogDetails: FunctionComponent<BlogDetailsProps> = ({match}) => {
    const { id } = match.params;
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const blog = data != null ? data as Blog : null;

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    
    return ( 
        <div className="blog-details">
            {error && <div> {error} </div>}
            { isPending ? <div>Loading...</div> : 
                blog && (
                    <article>
                        <h2>{ blog.title }</h2>
                        <p>Writen by { blog.author }</p>
                        <div>{ blog.body }</div>
                        <button onClick={handleClick}>delete</button>
                    </article>
                )}
        </div>
     );
}

const BlogDetailsWithRouter = withRouter(BlogDetails);
 
export default BlogDetailsWithRouter;