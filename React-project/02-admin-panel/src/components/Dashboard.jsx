const Dashboard = () => {
  return (
    <section>
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="dashboard-item">
            <h2 className="text-3xl sm:text-4xl font-semibold">Dashboard</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Admin Dashboard
            </p>
          </div>

          <div className="dashboard-btn flex flex-wrap gap-2 md:justify-end">
            <button className="bg-slate-300 text-blue-700 px-6 py-2 rounded-3xl hover:bg-blue-400 hover:text-white transition duration-300 font-bold">
              Manage
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-3xl hover:bg-blue-500 transition duration-300">
              Add Customer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
