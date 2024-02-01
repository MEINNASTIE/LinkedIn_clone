export default function RightBar() {
  return (
    <div className="fixed top-0 right-0 pt-20">
    <div className="rightBar">
      <div className="container p-7">
        <div className="item shadow p-4 mb-4 mr-20">
          <span className="text-gray-500 text-sm">Add to your feeds</span>
          <div className="user flex items-center justify-between mt-4">
            <div className="userInfo flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="">Javascript Developer</span>
              </div>
            </div>
            <div className="buttons flex gap-4">
              <button className="px-3 py-1 text-gray-500 border-2 border-solid border-gray-500 rounded-full">Follow</button>
            </div>
          </div>
        </div>
        {/* Add more users here */}
        <div className="item shadow p-4 mb-4 mr-20">
          <div className="user flex items-center justify-between mt-4">
            <div className="userInfo flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="">Javascript Developer</span>
              </div>
            </div>
            <div className="buttons flex gap-4">
              <button className=" px-3 py-1 text-gray-500 border-2 border-solid border-gray-500 rounded-full">Follow</button>
            </div>
          </div>
        </div>
        <div className="item shadow p-4 mb-4 mr-20">
          <div className="user flex items-center justify-between mt-4">
            <div className="userInfo flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="p-4">Javascript Developer</span>
              </div>
            </div>
            <div className="buttons flex gap-4">
              <button className="px-3 py-1 text-gray-500 border-2 border-solid border-gray-500 rounded-full">Follow</button>
            </div>
          </div>
        </div>
        <div className="item shadow p-4 mb-4 mr-20">
          <div className="user flex items-center justify-between mt-4">
            <div className="userInfo flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="">Javascript Developer</span>
              </div>
            </div>
            <div className="buttons flex gap-4">
              <button className="px-3 py-1 text-gray-500 border-2 border-solid border-gray-500 rounded-full">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}