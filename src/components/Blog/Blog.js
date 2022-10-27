import React from "react";
import expressImg from "../../assets/express.png";
import firebaseImg from "../../assets/firebase.png";
import nodeImg from "../../assets/nodejs.webp";
import reactRouterImgImg from "../../assets/react-router.png";

const Blog = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-10 bg-gray-100">
        <article className="bg-white rounded-2xl shadow-sm relative">
          <img
            className="rounded-t-2xl h-60 w-full object-contain"
            src={expressImg}
            alt="img"
          />
          <span className="absolute top-5 left-5 bg-gray-200 text-gray-900 px-3 py-1 rounded-full text-sm">
            Express
          </span>
          <div className="p-5">
            <h5 className="font-semibold text-xl">What is cors?</h5>
            <p className="text-gray-600 mt-3 leading-7">
              Cors stands for “Cross-Origin Resource Sharing”. It's a node.js
              package. The web API's is a procedure for two programs to
              communicate. That means API resources are consumed by clients and
              servers. When the client and server have a different origin from
              each other means when the client tries/requests to access
              resources from a different server, the server will fail. It
              happens for browser security, this is the time when we need to use
              Cors, it will disable these mechanisms and allow the client to
              access resources from the server.
            </p>
          </div>
        </article>
        <article className="bg-white rounded-2xl shadow-sm relative">
          <img
            className="rounded-t-2xl h-60 w-full object-contain"
            src={firebaseImg}
            alt="img"
          />
          <span className="absolute top-5 left-5 bg-yellow-200 text-gray-900 px-3 py-1 rounded-full text-sm">
            Firebase
          </span>
          <div className="p-5">
            <h5 className="font-semibold text-lg">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h5>
            <p className="text-gray-600 mt-3 leading-7">
              Firebase is Google’s Backend-as-a-Service (BAAS). It offers many
              features as a backend development tool for mobile and web apps. It
              helps us to write less code for the backend, manage the database,
              and so on. There are many other options for implementing
              authentication, they are: <code>1.Okta</code>{" "}
              <code>2.Amazon Cognito</code> <code>3.JSON Web Token</code>{" "}
              <code>4.Keycloak</code> <code>5.Auth0</code>
            </p>
          </div>
        </article>
        <article className="bg-white rounded-2xl shadow-sm relative">
          <img
            className="rounded-t-2xl h-60 w-full object-contain"
            src={reactRouterImgImg}
            alt="img"
          />
          <span className="absolute top-5 left-5 bg-red-200 text-gray-900 px-3 py-1 rounded-full text-sm">
            Route
          </span>
          <div className="p-5">
            <h5 className="font-semibold text-xl">
              How does the private route work?
            </h5>
            <p className="text-gray-600 mt-3 leading-7">
              Private Routes vary on the Apps, For example, Dashboard, User
              Profile, App Settings, etc. In simple words, Routes that can be
              accessed only after login are called private routes. So if a user
              is not authorized for a specific page, they cannot access it. The
              main difference between public and private route are redirect URL
              and authenticate condition. If the user is not authorized will be
              redirected to the login page.
            </p>
          </div>
        </article>
        <article className="bg-white rounded-2xl shadow-sm relative">
          <img
            className="rounded-t-2xl h-60 w-full object-contain"
            src={nodeImg}
            alt="img"
          />
          <span className="absolute top-5 left-5 bg-green-200 text-gray-900 px-3 py-1 rounded-full text-sm">
            Node
          </span>
          <div className="p-5">
            <h5 className="font-semibold text-xl">
              What is Node? How does Node work?
            </h5>
            <p className="text-gray-600 mt-3 leading-7">
              Node.js is an open-source backend javascript runtime environment.
              It launched in 2009 and is written in C, C++, and JavaScript. It
              is used as a backend service where javascript works on the server
              side of the application. This way javascript is used on both
              frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code. Node.js accepts the
              request from the clients and sends the response, while working
              with the request node.js handles them with a single thread to
              operate input/output operations.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Blog;
