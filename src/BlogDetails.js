import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";




const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog, isPending, error}=useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();
    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(()=>{
            navigate('/');
        })
    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error  && <div>{ error }</div> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: { blog.author }</p>
                    <div><p>{ blog.body }</p></div>
                    <button onClick={handleClick}>Delete</button>

                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;