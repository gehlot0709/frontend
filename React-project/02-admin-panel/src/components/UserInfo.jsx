const UserInfo = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://randomuser.me/api/portraits/men/12.jpg"
        alt="User"
        className="w-9 h-9 rounded-full object-cover"
      />
      <span className="text-sm text-gray-700">
        Hi, <strong className="text-black">Pratham</strong>
      </span>
    </div>
  );
};

export default UserInfo;
