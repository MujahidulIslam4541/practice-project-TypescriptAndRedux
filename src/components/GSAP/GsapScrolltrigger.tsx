import React from "react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const LandingPage: React.FC = () => {
  const revealRef = useRevealAnimation();

  return (
    <div ref={revealRef} className="bg-white text-neutral-900">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #1e293b, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .card-hover {
          transition: all 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
        }
        .accent-shadow:hover {
          box-shadow: 0 10px 40px rgba(99, 102, 241, 0.15);
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-10 bg-gradient-to-b from-indigo-50/30 to-white">
        <div className="text-center space-y-6 max-w-3xl">
          <h1 className="text-6xl font-semibold reveal gradient-text">
            Welcome to Our Platform
          </h1>

          <p className="text-xl text-neutral-600 reveal max-w-xl mx-auto">
            Clean. Minimal. Smooth animations powered by GSAP.
          </p>

          <div className="flex gap-4 justify-center reveal">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-neutral-300 text-neutral-900 rounded-xl hover:bg-neutral-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="min-h-screen flex items-center p-10 bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-semibold text-center mb-14 reveal gradient-text">
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl reveal card-hover accent-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Fast</h3>
              <p className="text-neutral-600">
                Lightning-fast performance on every device.
              </p>
            </div>

            <div className="p-10 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl reveal card-hover accent-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">Clean UI</h3>
              <p className="text-neutral-600">
                Beautiful minimal user experience.
              </p>
            </div>

            <div className="p-10 bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl reveal card-hover accent-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-900">Focus</h3>
              <p className="text-neutral-600">
                Designed to reduce distraction and boost productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="min-h-screen flex items-center p-10 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-semibold text-center mb-14 reveal gradient-text">
            Gallery
          </h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="h-72 bg-gradient-to-br from-rose-50 to-white border border-rose-100 rounded-2xl reveal card-hover accent-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">🎨</div>
                <h3 className="text-2xl font-semibold text-rose-900">Creative</h3>
              </div>
            </div>

            <div className="h-72 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl reveal card-hover accent-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">💡</div>
                <h3 className="text-2xl font-semibold text-emerald-900">Innovation</h3>
              </div>
            </div>

            <div className="h-72 bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl reveal card-hover accent-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">⚡</div>
                <h3 className="text-2xl font-semibold text-amber-900">Performance</h3>
              </div>
            </div>

            <div className="h-72 bg-gradient-to-br from-pink-50 to-white border border-pink-100 rounded-2xl reveal card-hover accent-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">❤️</div>
                <h3 className="text-2xl font-semibold text-pink-900">Passion</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;