import React from 'react'

interface BlogsProps {
    id: string;
    title: string;
    description: string;
    image: string;
    slug: string;
}

const blogs = [
    {
        id: 1,
        title: "Blog 1",
        description: "Blog 1 Description",
        image: "imgi_14_67c7bc857d870bdadf59bf7f_5_axfszh",
        slug: "blog-1"
    },
    {
        id: 2,
        title: "Blog 2",
        description: "Blog 2 Description",
        image: "imgi_19_67bfeae088cadc030cc65ff8_Beach_Vista_2_p6owd4",
        slug: "blog-3" 
    }
]


const Blogs = () => {
  return (
    <div className='grid grid-cols-3'>
        <div className='flex flex-col px-4 py-6 mb-4 ml-4'>
            {blogs.map(blog => (
                <div key={blog.id} className='flex flex-col gap-4 relative '>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl'>{blog.title}</h2>
                    <p className='text-base py-4 px-4'>{blog.description}</p>
                </div>
            ))}

        </div>
        <div>

        </div>
    </div>
  )
}

export default Blogs