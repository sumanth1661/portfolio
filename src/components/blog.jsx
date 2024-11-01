import React from 'react';
import blogImage1 from '../assets/blogImage1.png';
import blogImage2 from '../assets/blogImage2.png';
import blogImage3 from '../assets/blogImage3.png';
import underline from '../assets/underline.png';

const Blog = () => {
    const blogPosts = [
        {
            image: blogImage1,
            description: "The first picture was a formal headshot image. I wanted it to have a subtle and elegant look, so I tried my best to use neutral colors throughout the scene. This picture was captured with a 2.4f Aptitude to have emphasis on myself entirely, a 1/40 shutter speed as it was shot indoor with almost zero movement in the scene, and an ISO of 200.",
            details: {
                iso: "200",
                shutterSpeed: "1/40",
                aptitude: "2.4f",
                focalLength: "50mm"
            }
        },
        {
            image: blogImage2,
            description: "This image depicts me in an aesthetic and passionate way. It was taken in my picturesque backyard during sunset and a slight drizzle of rain, adding a dramatic touch. I used a 4f aptitude for a soft blurry touch, an ISO of 200 to keep the noise minimal, and compensated brightness with a lower shutter speed of 100. The focal length of 70mm produced the best-looking images.",
            details: {
                iso: "200",
                shutterSpeed: "1/100",
                aptitude: "4f",
                focalLength: "70mm"
            }
        },
        {
            image: blogImage3,
            description: "The third image conveys a little story within its composition. I used Photoshop to superimpose two images taken at the same place with the same settings to produce a ghost image effect. The formal version of me reading a book is disturbed by the alter ego that's yearning to disrupt the controlled mind, adhering to boundaries and judgments of self.",
            details: {
                iso: "400",
                shutterSpeed: "1/50",
                aptitude: "3.5f",
                focalLength: "85mm"
            }
        }
    ];

    return (
        <div className="bg-black text-white py-16 px-8 font-raleway">
            <div className="container mx-auto">
                {/* Blog page title */}
                <div className="text-left mb-10">
                    <h1 className="text-4xl md:text-5xl font-vt323 text-white mb-2 inline-block">
                        My Blog
                    </h1>
                    <img src={underline} alt="underline" className="w-32 md:w-48 mb-8" />
                </div>

                {/* Centered Secondary Heading - Photography */}
                <h2 className="text-3xl md:text-4xl font-raleway text-white text-center mb-12">
                    Photography
                </h2>

                {/* Blog posts container */}
                <div className="space-y-20">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start gap-6 md:gap-10 border-b border-gray-800 pb-8">
                            {/* Blog post image */}
                            <div className="md:w-1/4 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                                <img src={post.image} alt={`Blog post ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                            </div>
                            
                            {/* Blog post description */}
                            <div className="md:w-3/4 text-gray-300 text-lg leading-relaxed">
                                <p className="mb-4">{post.description}</p>
                                
                                {/* Technical details labels */}
                                <div className="flex flex-wrap gap-3">
                                    <div className="bg-white bg-opacity-10 rounded-full px-4 py-2 text-sm shadow-md">
                                        <strong>ISO:</strong> {post.details.iso}
                                    </div>
                                    <div className="bg-white bg-opacity-10 rounded-full px-4 py-2 text-sm shadow-md">
                                        <strong>Shutter Speed:</strong> {post.details.shutterSpeed}
                                    </div>
                                    <div className="bg-white bg-opacity-10 rounded-full px-4 py-2 text-sm shadow-md">
                                        <strong>Aptitude:</strong> {post.details.aptitude}
                                    </div>
                                    <div className="bg-white bg-opacity-10 rounded-full px-4 py-2 text-sm shadow-md">
                                        <strong>Focal Length:</strong> {post.details.focalLength}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
