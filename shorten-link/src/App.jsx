import Form from "./components/Form";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <div className="px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-lg h-screen flex flex-col items-center justify-start gap-8">
        <NavBar />
        {/* Outlet */}
        <Form />
        {/* <Login /> */}
      </div>
    </>
  );
}

export default App;
