// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; 
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // if storing token
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-black flex items-center justify-center px-4">
      <motion.div
        className="bg-white/10 p-10 rounded-2xl shadow-xl backdrop-blur-lg max-w-lg w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white text-3xl font-bold mb-4">Welcome back 👋</h1>
        <p className="text-gray-300 mb-6">You have successfully logged in!</p>

        <div className="flex justify-center mb-6">
          <img
            src="https://api.dicebear.com/7.x/bottts/svg?seed=aswin"
            alt="avatar"
            className="w-20 h-20 rounded-full border-2 border-white"
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition"
          >
            Logout
          </button>
          <button className="px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition">
            Explore
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
