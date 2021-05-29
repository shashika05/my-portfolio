import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

const Post = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
     title,
     slug,
     mainImage{
       asset->{
         _id,
         url
       },
       alt
     }
   }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen p-12 bg-image-custom">
      <section className="container mx-auto">
        <h1 className="text-4xl flex justify-center">Blog Posts</h1>
        <h2 className="text-base flex text-gray-600 justify-center mb-12">
          Here is some interesting content for you
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article className="relative rounded-lg shadow-xl bg-white">
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white "
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-md object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end">
                      <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-white text-black bg-opacity-75 rounded-br-md">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Post;
