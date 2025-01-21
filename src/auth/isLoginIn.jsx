import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/spiraleE4.png";

const LoginIn = () => {

  //********************** Variables from env file **********************//
  //const API_DEV_LINK = import.meta.env.VITE_BACKEND_DEVELOPMENT_API_LINK; // Development API link
  const API_PRO_LINK = import.meta.env.VITE_BACKEND_PRODUCTION_API_LINK; // Production API link


  //********************** state variables **********************//
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        //********************** check if token is on the localstorage **********************//
        if (!token) { navigate("/auth/login"); throw new Error("Token not found"); }
        const headersList = { Authorization: `Bearer ${token}` };

        const reqOptions = { url: `${API_PRO_LINK}/auth/profile`, method: "GET", headers: headersList, };

        const response = await axios.request(reqOptions);
        setIsAuthenticated(response.status === 200 && response.data.message === "Authorized");
      } catch (error) { console.error("Error:", error); } finally { setIsLoading(false); }
    };
    fetchData();
  }
    // [onComplete]
  );

  useEffect(() => {
    if (!isLoading) { if (!isAuthenticated) { navigate("/auth/login"); } }
  }, [isLoading, isAuthenticated, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => { setLoading(false); }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <div className="min-h-screen">
          {/* Preloader */}
          <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-transform duration-700 ${loading ? '' : 'invisible'}`} >
            {/* Top half */}
            <div className={`absolute top-0 left-0 right-0 bottom-1/2 bg-gradient-to-br from-neutral-100 to-neutral-200 transition-transform duration-700 ${loading ? '' : '-translate-y-full scale-110'}`} />

            {/* Bottom half */}
            <div className={`absolute top-1/2 left-0 right-0 bottom-0 bg-gradient-to-br from-neutral-200 to-neutral-100 transition-transform duration-700 ${loading ? '' : 'translate-y-full scale-110'}`} />

            {/* Logo */}
            <div className={`relative z-10 -translate-y-1/2 p-10 transition-opacity duration-300 ${loading ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-[151px] h-[44px] rounded-lg flex items-center justify-center animate-pulse">
                <img src={Logo} alt="Logo" className="w-[151px] h-[44px] object-contain text-pink-500" />
              </div>
            </div>

            {/* Progress bar */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${loading ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-[200px] h-1 bg-pink-500/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-pink-500 to-pink-400 -translate-x-full animate-loading" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default LoginIn;