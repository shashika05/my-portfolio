/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import sanityClient from "../client";

import Loading from "./Loading";

// import "../invert-image.css";

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = ({ darkMode }) => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        // Read https://css-tricks.com/use-target_blank/
        const { blank, href } = mark;
        return blank ? (
          <a href={href} target="_blank" rel="noopener">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        );
      },
    },
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image,
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <Loading darkMode={darkMode} />;

  return (
    <main className="bg-gray-200 min-h-screen lg:p-24 md:p-16 sm:p-12 bg-image-custom2">
      <article className="container shadow-lg mx-auto rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="text-3xl lg:text-5xl mb-4">{singlePost.title}</h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <p className="flex items-center justify-center text-2xl text-center">
                {singlePost.name}
              </p>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-4 lg:px-48 py-4 lg:py-20 prose lg:prose-xl max-w-full bg-image-custom2">
          <BlockContent
            blocks={singlePost.body}
            serializers={serializers}
            projectId="j914unc7"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
