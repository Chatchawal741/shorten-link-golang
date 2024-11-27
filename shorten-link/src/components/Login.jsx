function Login() {
  return (
    <div className="mt-4 p-4 rounded-lg md:rounded-2xl shadow-lg">
      <form className="flex flex-col justify-start gap-4 py-4">
        <span className="font-semibold text-3xl">Login</span>
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          type="emal"
          className="bg-gray-200 py-[6px] md:py-[4px] rounded-lg md:rounded-md outline-blue-500 indent-2 placeholder:p-2 placeholder:text-sm placeholder:text-slate-500"
          placeholder="Email"
        />
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          type="text"
          className="bg-gray-200 py-[6px] md:py-[4px] rounded-lg md:rounded-md outline-blue-500 indent-2 placeholder:p-2 placeholder:text-sm placeholder:text-slate-500"
          placeholder="Password"
        />
        <button className="mt-4 font-medium bg-blue-600 active:bg-blue-800 text-white py-[5px] rounded-3xl md:rounded-lg">
          Create User
        </button>
      </form>
    </div>
  );
}

export default Login;
