import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My website', body: 'Lorem ipsum...', author: 'prince', id: 1 },
        { title: 'Welcome party', body: 'Lorem ipsum...', author: 'dawinder', id: 2 },
        { title: 'Web dev top tips', body: 'Lorem ipsum...', author: 'deepanshu', id: 3 },
        { title: 'Automation tips', body: 'Lorem ipsum...', author: 'prince', id: 4 }
    ]);
    const handleDelete = (id)=>{
         const newBlogs = blogs.filter(blog => blog.id !==id)
         setBlogs(newBlogs);
    }

    return (
        <div className="home">
            {/* <BlogList blogss={blogs} Title="All Blogs"/> */}
            <BlogList blogss={blogs} Title="All new Blogs" handleDeleteBtn={handleDelete}/>
            {/* <BlogList blogss={blogs.filter((blog)=> blog.author === 'prince')} Title="prince's Blogs"/> */}
        </div>
    );
}

export default Home;