import React from 'react';

const MainFooter = () => {
  return (
    <footer className="text-gray-400 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-[#121212] rounded-lg">
        {/* Company Section */}
        <section>
          <h4 className="text-white font-bold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/jobs" className="hover:underline">Jobs</a></li>
            <li><a href="/record" className="hover:underline">For the Record</a></li>
          </ul>
        </section>

        {/* Communities Section */}
        <section>
          <h4 className="text-white font-bold mb-2">Communities</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/artists" className="hover:underline">For Artists</a></li>
            <li><a href="/developers" className="hover:underline">Developers</a></li>
            <li><a href="/advertising" className="hover:underline">Advertising</a></li>
            <li><a href="/investors" className="hover:underline">Investors</a></li>
            <li><a href="/vendors" className="hover:underline">Vendors</a></li>
          </ul>
        </section>

        {/* Useful Links Section */}
        <section>
          <h4 className="text-white font-bold mb-2">Useful Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/support" className="hover:underline">Support</a></li>
            <li><a href="/mobile-app" className="hover:underline">Free Mobile App</a></li>
          </ul>
        </section>

        {/* Spotify Plans Section */}
        <section>
          <h4 className="text-white font-bold mb-2">Spotify Plans</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/premium-individual" className="hover:underline">Premium Individual</a></li>
            <li><a href="/premium-duo" className="hover:underline">Premium Duo</a></li>
            <li><a href="/premium-family" className="hover:underline">Premium Family</a></li>
            <li><a href="/premium-student" className="hover:underline">Premium Student</a></li>
            <li><a href="/spotify-free" className="hover:underline">Spotify Free</a></li>
          </ul>
        </section>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 py-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
          <i className="fab fa-facebook text-xl"></i>
        </a>
      </div>

      <hr className="border-gray-700 mx-6" />

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 py-4">
        <p>&copy; 2024 Spotify AB</p>
      </div>
    </footer>
  );
};

export default MainFooter;
