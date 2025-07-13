const Messagedropdown = () => {
  const msgItem = [
    {
      name: "pratham gehlot",
      msg: "how are you",
      time: "5 minutes ago",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "pratham gehlot",
      msg: "how are you",
      time: "5 minutes ago",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "pratham gehlot",
      msg: "how are you",
      time: "5 minutes ago",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "pratham gehlot",
      msg: "how are you",
      time: "5 minutes ago",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  return (
    <section className="absolute bg-white shadow-2xl w-72 sm:right-0 right-2 top-12 text-black rounded-lg border border-gray-400 z-50">
      <div className="mt-2">
        <div className="flex border-b pb-2 px-4">
          <h3 className="text-sm font-semibold">Message</h3>
          <button className="ml-auto text-sm text-blue-700">All as read</button>
        </div>
        <div className="text-sm overflow-scroll h-72">
          {msgItem.map((item, index) => (
            <div className="flex border-b py-2 px-4 items-center" key={index}>
              <img
                src={item.img}
                alt="img"
                className="w-10 h-10 rounded-full object-cover"
              />
              <ul className="ml-4">
                <li className="text-sm text-gray-800 font-semibold">
                  {item.name}
                </li>
                <li className="font-light my-1">{item.msg}</li>
                <li className="text-xs mt-1">{item.time}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="text-sm p-2 border-t text-center">
          <button className="text-blue-600 hover:underline">
            See all messages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Messagedropdown;
