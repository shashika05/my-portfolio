import React, { useEffect, useState } from "react";
import sanityClient from "../client";
// import bgImage from "../assets/background-img.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import Loading from "./Loading";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const MyStory = ({ darkMode }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <Loading darkMode={darkMode} />;

  return (
    <main className={`${darkMode ? "filter invert" : ""} min-h-screen p-8`}>
      {/* <img src={bgImage} alt="bg-img" className="absolute w-full" /> */}
      {/* <div className="p-10 l:pt-48 container mx-auto"> */}
      <section className="relative rounded-lg shadow-xl bg-white bg-image-custom2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-16 sm:p-8">
        <img
          src={urlFor(author.authorImage).url()}
          className="rounded w-32 h-32 sm:mx-auto md:mr-8 lg:mt-4 md:mt-4 lg:w-64 lg:h-64 mr-4 mt-4 mb-4"
          alt={author.name}
        />
        <div className="text-lg flex flex-col justify-center">
          <h1 className="lg:text-5xl font-bold mb-4 text-black">
            Hey there,
            <br /> I'm <span>{author.name}</span>
          </h1>
          <div className="prose lg:prose-xl text-black">
            <BlockContent
              blocks={author.bio}
              projectId="j914unc7"
              dataset="production"
            />
          </div>
        </div>
      </section>
      {/* </div> */}
    </main>
  );
};

export default MyStory;
