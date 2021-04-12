import React from "react";

const Footer = () => {
  return (
    <footer className="sm:m-5">
      <div className="mt-5">
        <ul className="flex text-xs text-gray-400 flex-wrap sm:m-2">
          <li className="m-1">About</li>
          <li className="m-1">Help</li>
          <li className="m-1">Press</li>
          <li className="m-1">API</li>
          <li className="m-1">Privacy</li>
          <li className="m-1">Jobs</li>
          <li className="m-1">Terms</li>
          <li className="m-1">Locations</li>
          <li className="m-1">Top Accounts</li>
          <li className="m-1">Hashtags</li>
          <li className="m-1">Language</li>
        </ul>
      </div>
      <p className="mt-5 text-gray-400 text-xs sm:m-2">
        &copy; 2021 Instagram from Facebook
      </p>
    </footer>
  );
};

export default Footer;
