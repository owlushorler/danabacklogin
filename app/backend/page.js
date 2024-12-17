
"use client"

// pages/posts.js  


import { useEffect, useState } from 'react';  

const PostsPage = () => {  
    const [posts, setPosts] = useState([]);  
    const [jobTitle, setTitle] = useState('');  
    const [company, setCompany] = useState(''); 
    const [loction, setLoction] = useState('');   
    const [updateId, setUpdateId] = useState(null);  

    // Fetch posts  
    useEffect(() => {  
        const fetchPosts = async () => {  
            const response = await fetch('https://danaback-2.onrender.com/danatest');  
            const data = await response.json();  
            setPosts(data);  
        };  
        fetchPosts();  
    }, []);  

    // Create a post  
    const createPost = async (e) => {  
        e.preventDefault();  
        const response = await fetch('https://danaback-2.onrender.com/danatest', {  
            method: 'POST',  
            headers: { 'Content-Type': 'application/json' },  
            body: JSON.stringify({ jobTitle, company, loction }),  
        });  
        const newPost = await response.json();  
        setPosts([...posts, newPost]);  
        setTitle('');  
        setCompany(''); 
        setLoction("") 
    };  

    // Delete a post  
    const deletePost = async (id) => {  
        await fetch(`https://danaback-2.onrender.com/danatest/${id}`, { method: 'DELETE' });  
        setPosts(posts.filter(post => post._id !== id));  
    };  

    // Prepare to update a post  
    const startUpdate = (post) => {  
        setTitle(post.jobTitle);  
        setCompany(post.company);  
        setLoction(post.loction);  
    };  

    // Update a post  
    const updatePost = async (e) => {  
        e.preventDefault();  
        const response = await fetch(`https://danaback-2.onrender.com/danatest=${updateId}`, {  
            method: 'PUT',  
            headers: {  
                'Content-Type': 'application/json',  
            },  
            body: JSON.stringify({ jobTitle, company, loction }),  
        });  
        const updatedPost = await response.json();  
        setPosts(posts.map(post => (post._id === updateId ? updatedPost : post)));  
        setTitle('');  
        setContent('');  
        setUpdateId(null);  
    };  

    return (  
        <div> 
            <div className='text-center m-2 bg-red-700 p-2 text-white'>
            <h1 className='text-2xl'  >Admin Only</h1>  
            <p>enter the details below</p>
            <form className=' text-black flex flex-wrap justify-center gap-2'  onSubmit={updateId ? updatePost : createPost}>  
                <input  
                    type="text"  
                    placeholder="Title"  
                    value={jobTitle}  
                    onChange={(e) => setTitle(e.target.value)}  
                    required  
                />  
                <input 
                    placeholder="Company"  
                    value={company}  
                    onChange={(e) => setCompany(e.target.value)}  
                    required  
                ></input>  

            <input  
                    placeholder="location"  
                    value={loction}  
                    onChange={(e) => setLoction(e.target.value)}  
                    required  
                ></input>  
                <button type="submit">{updateId ? 'Update' : 'Create'} Post</button>  
            </form>  

            </div> 
            <ul className='bg-blue-800 text-center text-white md:gap-3  flex flex-col gap-7 text-sm ' >  
                {posts.map(post => (  
                    <li className=' grid grid-cols-5   gap-3 align-middle' key={post._id}>   
                        <h2>{post.jobTitle}</h2>  
                        <p>{post.company}</p>  
                        <p>{post.loction}</p>  
                        <button className='bg-yellow-700' onClick={() => startUpdate(post)}>Edit</button>  
                        <button className=' bg-red-700' onClick={() => deletePost(post._id)}>Delete</button>  
                    </li>  
                ))}  
            </ul>  
        </div>  
    );  
};  

export default PostsPage;