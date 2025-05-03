import axios from "axios";
import {
    ArrowRight,
    Clock,
    User
} from "lucide-react";
import { useEffect, useState } from "react";

const QuoteArchitecture = ({ externalFetchTrigger }) => {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flow, setFlow] = useState(null);
  const [terminalLog, setTerminalLog] = useState([]);
  const [showArchitecture, setShowArchitecture] = useState(false);

  const addLogMessage = (message) => {
    setTerminalLog((prev) => [...prev, { id: Date.now(), message }]);
  };    

  const fetchQuote = async () => {
    setTerminalLog([]);
    setLoading(true);
    setError(null);
    setQuoteData(null);
    setFlow("request-sent");

    setTimeout(() => {
      addLogMessage("> User initiated request: GET /api/v1/random");
    }, 10);

    setTimeout(() => {
      addLogMessage("> Sending request to Express server...");
    }, 100);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/v1/random`,
        {
          headers: { "x-api-key": import.meta.env.VITE_API_KEY },
        }
      );

      const source = response.data.source;
      const quote = response.data.data;

      setFlow(source === "cache" ? "from-cache" : "from-db");

      addLogMessage("> Request received by Express server");
      addLogMessage(
        source === "cache"
          ? "> Cache HIT! Quote served from Redis"
          : "> Cache MISS! Quote fetched from MySQL"
      );
      addLogMessage(
        `> Response returned to client in ${response.data.timeTakenMs}ms`
      );

      setQuoteData({
        data: quote,
        source,
        timeTakenMs: response.data.timeTakenMs,
      });
    } catch (err) {
      const errorMsg = "Too many requests, please try again later.";
      setError(errorMsg);
      addLogMessage(`> Error: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     fetchQuote();
  //   }, []);

  // This allows the Hero component to trigger fetchQuote
  useEffect(() => {
    if (externalFetchTrigger) {
      fetchQuote();
    }
  }, [externalFetchTrigger]);

  const getNodeStyle = (nodeType) => {
    const base = "border-2 transition-all duration-500";

    if (flow === "from-cache" && nodeType === "cache") {
      return `${base} border-green-500 shadow-lg shadow-green-500/50 bg-slate-800/90 ring-2 ring-green-500/30`;
    }
    if (flow === "from-db" && nodeType === "database") {
      return `${base} border-blue-500 shadow-lg shadow-blue-500/50 bg-slate-800/90 ring-2 ring-blue-500/30`;
    }
    if (flow === "request-sent" && ["client", "api"].includes(nodeType)) {
      return `${base} border-blue-600 shadow-lg shadow-blue-600/30 bg-slate-800/90`;
    }

    return `${base} border-slate-700 bg-slate-800`;
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-4 sm:p-6 rounded-lg shadow-lg w-full mx-auto">
      {/* Compact Quote Card */}
      <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800 shadow-lg mb-6">
        <div className="px-3 sm:px-5 py-3 sm:py-4">
          {loading ? (
            <div className="flex justify-center py-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 border-3 sm:border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center py-2 text-sm sm:text-base">
              {error}
            </div>
          ) : quoteData ? (
            <div className="flex flex-col">
              <blockquote className="text-base sm:text-lg italic text-white mb-2">
                "{quoteData.data.text}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-2 sm:gap-0">
                <div className="flex items-center gap-3">
                  <div
                    className="px-2 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor:
                        quoteData.source === "cache"
                          ? "rgba(16,185,129,0.2)"
                          : "rgba(59,130,246,0.2)",
                      color:
                        quoteData.source === "cache"
                          ? "rgb(16,185,129)"
                          : "rgb(59,130,246)",
                    }}
                  >
                    {quoteData.source.charAt(0).toUpperCase() +
                      quoteData.source.slice(1)}
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock size={14} />
                    <span>{quoteData.timeTakenMs}ms</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={fetchQuote}
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-md transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    GET DEV QUOTE
                  </button>

                  <button
                    onClick={() => setShowArchitecture((prev) => !prev)}
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
                  >
                    <span>
                      {showArchitecture
                        ? "Hide Architecture"
                        : "View Architecture"}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`sm:w-[14px] sm:h-[14px] transition-transform duration-300 ${
                        showArchitecture ? "rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Architecture & Terminal */}
      {showArchitecture && (
        <div className="space-y-4 sm:space-y-6 animate-fadeIn">
          {/* Architecture diagram - Responsive for mobile */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center sm:space-x-2 p-2 sm:p-4 bg-slate-900/50 rounded-lg border border-slate-700">
            {/* Mobile view - stack items vertically */}
            <div className="flex flex-col items-center w-full sm:hidden space-y-2">
              <div
                className={`w-full h-16 ${getNodeStyle(
                  "client"
                )} rounded-lg flex items-center justify-center`}
              >
                <div className="text-center">
                  <User
                    className="mx-auto mb-1 text-blue-300"
                    size={18}
                  />
                  <span className="text-xs font-semibold text-white">
                    Client
                  </span>
                </div>
              </div>

              <div className="transform rotate-90">
                <ArrowRight className="text-blue-600" size={16} />
              </div>

              <div
                className={`w-full h-16 ${getNodeStyle(
                  "api"
                )} rounded-lg flex items-center justify-center`}
              >
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746299009/altamsh-portfolio/assets/ddlpll3hwhhugaae1ode.webp"
                    alt="Express Logo"
                    className="w-6 h-6 mx-auto mb-1 object-contain"
                  />
                  <span className="text-xs font-semibold text-white">
                    Express Server
                  </span>
                </div>
              </div>

              <div className="transform rotate-90">
                <ArrowRight className="text-blue-600" size={16} />
              </div>

              <div
                className={`w-full h-16 ${getNodeStyle(
                  "cache"
                )} rounded-lg flex items-center justify-center`}
              >
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746291300/altamsh-portfolio/assets/ri9xushcsiragcvnsga7.png"
                    alt="Redis Logo"
                    className="w-6 h-6 mx-auto mb-1 object-contain"
                  />
                  <span className="text-xs font-semibold text-white">
                    Redis Cache
                  </span>
                </div>
              </div>

              <div className="transform rotate-90">
                <ArrowRight className="text-blue-600" size={16} />
              </div>

              <div
                className={`w-full h-16 ${getNodeStyle(
                  "database"
                )} rounded-lg flex items-center justify-center`}
              >
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746291993/altamsh-portfolio/assets/cou0alpobczuytqsh7kr.png"
                    alt="MySQL Logo"
                    className="w-6 h-6 mx-auto mb-1 object-contain"
                  />
                  <span className="text-xs font-semibold text-white">
                    MySQL
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop/tablet view - horizontal */}
            <div className="hidden sm:flex flex-row items-center justify-center space-x-2">
              <div
                className={`w-28 md:w-36 h-16 md:h-20 ${getNodeStyle(
                  "client"
                )} rounded-lg flex items-center justify-center`}
              >
                <div className="text-center">
                  <User
                    className="mx-auto mb-1 text-blue-300"
                    size={20}
                  />
                  <span className="text-xs font-semibold text-white">
                    Client
                  </span>
                </div>
              </div>

              <ArrowRight className="text-blue-600" size={20} />

              <div
                className={`w-28 md:w-36 h-16 md:h-20 ${getNodeStyle(
                  "api"
                )} rounded-lg flex items-center justify-center`}
              >
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746299009/altamsh-portfolio/assets/ddlpll3hwhhugaae1ode.webp"
                    alt="Express Logo"
                    className="w-6 md:w-8 h-6 md:h-8 mx-auto mb-1 object-contain"
                  />
                  <span className="text-xs font-semibold text-white">
                    Express Server
                  </span>
                </div>
              </div>

              <ArrowRight className="text-blue-600" size={20} />

              <div
                className={`w-28 md:w-36 h-16 md:h-20 ${getNodeStyle(
                  "cache"
                )} rounded-lg flex items-center justify-center`}
              >
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746291300/altamsh-portfolio/assets/ri9xushcsiragcvnsga7.png"
                    alt="Redis Logo"
                    className="w-6 md:w-8 h-6 md:h-8 mx-auto mb-1 object-contain"
                  />
                  <span className="text-xs font-semibold text-white">
                    Redis Cache
                  </span>
                </div>
              </div>

              <ArrowRight className="text-blue-600" size={20} />

              <div
                className={`w-28 md:w-36 h-16 md:h-20 ${getNodeStyle(
                  "database"
                )} rounded-lg flex items-center justify-center`}
              >
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/dhbuw3k2w/image/upload/v1746291993/altamsh-portfolio/assets/cou0alpobczuytqsh7kr.png"
                    alt="MySQL Logo"
                    className="w-6 md:w-8 h-6 md:h-8 mx-auto mb-1 object-contain"
                  />
                  <span className="text-xs font-semibold text-white">
                    MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Output */}
          <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900 shadow-lg">
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
              <span className="font-mono text-xs sm:text-sm text-white">
                Terminal Logs
              </span>
              <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-700 rounded text-xs text-slate-300">
                API Response Flow
              </div>
            </div>
            <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm max-h-32 sm:max-h-48 overflow-y-auto">
              {terminalLog.map((log) => (
                <div key={log.id} className="text-green-400 mb-1">
                  {log.message}
                </div>
              ))}
              {loading && (
                <div className="text-blue-400 flex items-center">
                  <div className="mr-2 h-2 sm:h-3 w-2 sm:w-3 bg-blue-400 rounded-full animate-pulse"></div>
                  Processing...
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QuoteArchitecture;
