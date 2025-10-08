import React from "react";

function App() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center px-4 text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="max-w-2xl bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
        {/* Logo / Brand Name */}
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">
          EEE Technologies
        </h1>

        {/* Tagline */}
        <p className="text-white/90 text-lg md:text-xl mb-8">
          Empowering Futures with Technology & IT Training
        </p>

        {/* Coming Soon Box */}
        <div className="bg-white/10 rounded-xl py-8 px-6 border border-white/20 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            🚀 Coming Soon
          </h2>
          <p className="text-white/80 mb-6">
            Our website is under construction. Stay tuned for something amazing!
          </p>

          {/* Email Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg focus:outline-none text-gray-800 flex-1"
              required
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded-lg hover:bg-indigo-100 transition"
            >
              Notify Me
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-white/70 text-sm">
          © {new Date().getFullYear()} EEE Technologies. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
