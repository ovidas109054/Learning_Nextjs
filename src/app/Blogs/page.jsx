import React from 'react';
import Cards from '../component/Cards';

const blogsData = [
  {
    id: 1,
    title: "Introduction to React",
    author: "Ovi Das",
    category: "Web Development",
    description: "Learn the basics of React and how to build interactive user interfaces.",
    date: "2026-10-01",
    image: "https://picsum.photos/400/250?random=1"
  },
  {
    id: 2,
    title: "Getting Started with JavaScript",
    author: "Rahim Ahmed",
    category: "Programming",
    description: "Understand JavaScript variables, functions, loops, and objects.",
    date: "2026-10-02",
    image: "https://picsum.photos/400/250?random=2"
  },
  {
    id: 3,
    title: "Mastering Data Structures",
    author: "Sadia Islam",
    category: "DSA",
    description: "Explore arrays, linked lists, stacks, queues, and trees.",
    date: "2026-10-03",
    image: "https://picsum.photos/400/250?random=3"
  },
  {
    id: 4,
    title: "Introduction to Machine Learning",
    author: "Tanvir Hasan",
    category: "Artificial Intelligence",
    description: "Discover how machine learning models learn patterns from data.",
    date: "2026-10-04",
    image: "https://picsum.photos/400/250?random=4"
  },
  {
    id: 5,
    title: "Building Responsive Websites with Tailwind CSS",
    author: "Nusrat Jahan",
    category: "CSS",
    description: "Create modern, responsive website layouts using Tailwind CSS utility classes.",
    date: "2026-10-05",
    image: "https://picsum.photos/400/250?random=5"
  }
];



const page = () => {
    return (
        <div>
            <h1>This is the Blogs </h1>


            {
                blogsData.map(blog => <Cards key = {blog.id} blog={blog}></Cards>)
            }
        </div>
    );
};

export default page;