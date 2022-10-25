import React from "react";

const Footer = () => {
  return (
    <footer class="flex justify-between items-center pt-10 pb-5 px-10 footer-shadow">
      <p class="text-center text-gray-800 font-medium">
        &copy; 2022 Brighters. All rights reservered.
      </p>
      <div class="flex justify-center space-x-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
            alt=""
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
            alt=""
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
            alt=""
          />
        </a>
        <a
          href="https://messenger.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"
            alt=""
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/fluent/30/000000/twitter.png"
            alt=""
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
