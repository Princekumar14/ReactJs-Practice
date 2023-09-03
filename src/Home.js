import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs, isPending, error}=useFetch('http://localhost:8000/blogs')
    // const [blogs, setBlogs] = useState( null
    //     [ 
    //     { title: 'My website', body: 'Lorem ipsum...', author: 'prince', id: 1 },
    //     { title: 'Welcome party', body: 'Lorem ipsum...', author: 'dawinder', id: 2 },
    //     { title: 'Web dev top tips', body: 'Lorem ipsum...', author: 'deepanshu', id: 3 },
    //     { title: 'Automation tips', body: 'Lorem ipsum...', author: 'prince', id: 4 }
    // ]
    // );

    // const[isPending, setIsPending] = useState(true);
    // const[error, setError] = useState(null);
    
    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog => blog.id !==id)
        // setBlogs(newBlogs);
   }

    
    return (
        <div className="home">
            {/* <BlogList blogss={blogs} Title="All Blogs"/> */}
            {/* <BlogList blogss={blogs} Title="All new Blogs" handleDeleteBtn={handleDelete}/> */}
            {/* <BlogList blogss={blogs.filter((blog)=> blog.author === 'prince')} Title="prince's Blogs"/> */}

            { error  && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogss={blogs} Title="All new Blogs" handleDeleteBtn={handleDelete}/>}
        </div>
    );
}

export default Home;