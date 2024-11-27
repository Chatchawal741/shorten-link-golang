import Input from "./Input";

function Form() {
  return (
    <div className="h-[40vh] flex flex-col items-center justify-center">
      <div>
        {/* <label
          htmlFor="short_link"
          className="text-2xl font-semibold text-green-600 sha"
        >
          shorten link
        </label> */}
        <div className="md:w-[calc(100vw/2)] p-4 bg-green-800  rounded-2xl justify-between md:rounded-lg flex flex-col gap-6 md:flex-row md:gap-4 shadow-xl shadow-gray-300 text-white">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default Form;
