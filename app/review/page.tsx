"use client";

import { useState, useEffect } from "react";

export default function ReviewPage() {
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const googleReviewUrl = "https://g.page/r/CVD8gm9m_RlqEBM/review";

  const fetchReview = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/generate-review");
      if (!res.ok) throw new Error("Failed to generate");
      const data = await res.json();
      setReviewText(data.review);
    } catch (err) {
      console.error(err);
      setError("Great experience, highly recommended!");
      setReviewText("Great experience, highly recommended!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);

  const handleCopyAndRedirect = async () => {
    if (!reviewText) return;

    try {
      await navigator.clipboard.writeText(reviewText);
      setCopied(true);
      
      setTimeout(() => {
        setCopied(false);
        window.open(googleReviewUrl, "_blank", "noopener,noreferrer");
      }, 800);
    } catch (err) {
      console.error("Failed to copy:", err);
      // Fallback redirect if copy fails
      window.open(googleReviewUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1021] text-white flex items-center justify-center p-4 sm:p-6 md:p-8 font-body">
      <div className="w-full max-w-lg mx-auto animate-in fade-in duration-500">
        
        {/* Solid Color Card */}
        <div className="bg-[#1C1D36] border border-[#2F3151] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden transition-all duration-300">
          
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold font-headline mb-3 tracking-tight text-white">
              Leave a Quick Review ⭐
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-sm mx-auto">
              We&apos;ve generated a review for you. Just copy and paste — takes less than 10 seconds.
            </p>
          </div>

          {/* Main Content Area */}
          <div className="mb-6">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-10 space-y-4 animate-pulse">
                <div className="w-10 h-10 border-4 border-[#3B82F6]/30 border-t-[#3B82F6] rounded-full animate-spin"></div>
                <p className="text-[#3B82F6] font-medium text-sm">Generating your unique review...</p>
              </div>
            ) : (
              <div className="space-y-4 fade-in animate-in duration-500">
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-yellow-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                {/* High Contrast Text Area */}
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full h-32 sm:h-36 bg-[#0B0C1A] border border-[#2F3151] rounded-xl p-4 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Your review here..."
                />
              </div>
            )}
          </div>

          {/* Single Focused Action Button */}
          <div className="space-y-4">
            <button
              onClick={handleCopyAndRedirect}
              disabled={loading || !reviewText}
              className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer
                ${loading || !reviewText 
                  ? "bg-[#2F3151] text-gray-400 cursor-not-allowed" 
                  : copied 
                    ? "bg-green-600 hover:bg-green-500" 
                    : "bg-blue-600 hover:bg-blue-500"
                }`}
            >
              {copied ? (
                <>
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                  <span>Copied! Opening Google...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-xl">content_copy</span>
                  <span>Copy Review & Open Google</span>
                </>
              )}
            </button>

            {/* Success Message */}
            {copied && (
              <p className="text-green-400 text-sm sm:text-base font-medium text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                Copied! Now paste your review on Google and click submit ⭐
              </p>
            )}

            {/* Step Guide with clear solid background */}
            <div className="bg-[#0B0C1A] border border-[#2F3151] rounded-xl p-4 sm:p-5 my-6">
              <ul className="space-y-3 text-sm sm:text-base text-gray-200 font-medium">
                <li className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs border border-green-500/30">1</span>
                  <span>Copy review <span className="opacity-80">✅</span></span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs border border-blue-500/30">2</span>
                  <span>Paste on Google <span className="opacity-80">⭐</span></span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F3151] text-white flex items-center justify-center text-xs border border-[#44476E]">3</span>
                  <span>Click submit <span className="opacity-80">✔</span></span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
