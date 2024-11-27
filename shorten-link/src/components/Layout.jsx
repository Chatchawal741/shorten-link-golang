import { useState } from "react";
function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl font-bold">hello tailwind</h1>
      <div className="px-4 py-2 bg-blue-500 w-max rounded-lg text-white font-medium">
        <button onClick={() => setOpen((pre) => !pre)}>
          {open ? "open" : "close"}
        </button>
      </div>
      <div className={`${open ? "hidden" : "block"}`}>
        <div className="bg-red-100 px-2">none: &lt; 640</div>
        <div className="bg-indigo-100 sm:px-4 hidden sm:block">
          sm: &ge; 640
        </div>
        <div className="bg-pink-200 md:px-8 hidden md:block">
          md: &ge; 768px
        </div>
        <div className="bg-green-100 lg:px-16 hidden lg:block">
          lg: &ge; 1024px
        </div>
        <div className="bg-orange-100 xl:px-24 hidden xl:block">
          lg: &ge; 1280px
        </div>
        <div className="bg-yellow-100 2xl:px-32 hidden 2xl:block">
          2xl: &ge; 1536px
        </div>
      </div>
    </div>
  );
}

export default Layout;
