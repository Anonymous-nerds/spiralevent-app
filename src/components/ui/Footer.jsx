import React from "react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../../mockData/data";
import { footer } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className="mt-60 border-t py-10 border-pink-800 bg-pink-800 text-gray-800 pl-[100px]">
      {/* change margin-top to 20 from 60 */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-gray-800"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-gray-800"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-gray-800"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
