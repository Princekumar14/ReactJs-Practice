const BlogList = (props) => {
    const blogs = props.blogss 
    const title = props.Title
    const deleteBlogs = props.handleDeleteBtn
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}> 
                <h2>{blog.title}</h2>
                <p>Written By: {blog.author}</p>
                {/* <button onClick={()=>deleteBlogs (blog.id)}>delete blog</button> */}
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;