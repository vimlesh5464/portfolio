import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 bg-gray-100 text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">

        {/* Brand */}
        <div className="lg:w-1/3 flex justify-center lg:justify-start">
          <span className="text-2xl font-bold">Vimlesh Gupta</span>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">

          {/* Developer Links */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-900">Profiles</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/vimlesh5464" className="hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/u/VimleshGupta/" className="hover:underline">
                  LeetCode
                </a>
              </li>
              <li>
                <a href="www.linkedin.com/in/vimlesh-gupta-663618208" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="uppercase text-gray-900">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/vimlesh5464/" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio Quick Links */}
          <div className="space-y-3">
            <h3 className="uppercase text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/skill" className="hover:underline">Skills</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} Vimlesh Gupta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
