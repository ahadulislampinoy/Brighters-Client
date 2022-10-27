import React from "react";
import expressImg from "../../assets/express.png";
import firebaseImg from "../../assets/firebase.png";
import nodeImg from "../../assets/nodejs.webp";
import reactRouterImgImg from "../../assets/react-router.png";

const Blog = () => {
  return (
    <div>
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 bg-gray-100">
        <article class="bg-white rounded-2xl shadow-sm relative">
          <img
            class="rounded-t-2xl h-60 w-full object-contain"
            src={expressImg}
            alt="img"
          />
          <span class="absolute top-5 left-5 bg-gray-200 text-gray-900 px-3 py-1 rounded-full text-sm">
            Express
          </span>
          <div class="p-5">
            <h5 class="font-semibold text-xl">What is cors?</h5>
            <p class="text-gray-600">...</p>
          </div>
        </article>
        <article class="bg-white rounded-2xl shadow-sm relative">
          <img
            class="rounded-t-2xl h-60 w-full object-contain"
            src={firebaseImg}
            alt="img"
          />
          <span class="absolute top-5 left-5 bg-yellow-200 text-gray-900 px-3 py-1 rounded-full text-sm">
            Firebase
          </span>
          <div class="p-5">
            <h5 class="font-semibold text-lg">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h5>
            <p class="text-gray-600">...</p>
          </div>
        </article>
        <article class="bg-white rounded-2xl shadow-sm relative">
          <img
            class="rounded-t-2xl h-60 w-full object-contain"
            src={reactRouterImgImg}
            alt="img"
          />
          <span class="absolute top-5 left-5 bg-red-200 text-gray-900 px-3 py-1 rounded-full text-sm">
            Route
          </span>
          <div class="p-5">
            <h5 class="font-semibold text-xl">
              How does the private route work?
            </h5>
            <p class="text-gray-600">...</p>
          </div>
        </article>
        <article class="bg-white rounded-2xl shadow-sm relative">
          <img
            class="rounded-t-2xl h-60 w-full object-contain"
            src={nodeImg}
            alt="img"
          />
          <span class="absolute top-5 left-5 bg-green-200 text-gray-900 px-3 py-1 rounded-full text-sm">
            Node
          </span>
          <div class="p-5">
            <h5 class="font-semibold text-xl">
              What is Node? How does Node work?
            </h5>
            <p class="text-gray-600">...</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Blog;
