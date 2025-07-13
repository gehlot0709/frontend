const BackendStyle = () => {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 transition-all duration-500 mt-6">
      <h2 className="text-2xl font-bold text-center text-green-600 dark:text-green-400 mb-4">
        Backend Skills
      </h2>
      <ul className="space-y-3 text-lg font-medium text-gray-800 dark:text-gray-200">
        <li className="hover:translate-x-2 transition-all duration-300">✅ Node.js</li>
        <li className="hover:translate-x-2 transition-all duration-300">✅ Express.js</li>
        <li className="hover:translate-x-2 transition-all duration-300">✅ MongoDB</li>
        <li className="hover:translate-x-2 transition-all duration-300">✅ Mongoose</li>
        <li className="hover:translate-x-2 transition-all duration-300">✅ RESTful APIs</li>
        <li className="hover:translate-x-2 transition-all duration-300">✅ JWT Authentication</li>
        <li className="hover:translate-x-2 transition-all duration-300">✅ Middleware Concepts</li>
        <li className="hover:translate-x-2 transition-all duration-300">✅ Database Design</li>
        <li className="hover:translate-x-2 transition-all duration-300">✅ Git & GitHub</li>
        <li className="hover:translate-x-2 transition-all duration-300">✅ Deployment (Render, Vercel)</li>
      </ul>
    </div>
  );
};

export default BackendStyle;
