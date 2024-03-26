import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
// import EditProfile from "./pages/EditProfile";
// import Search from "./pages/Search";
// import CreateTask from "./pages/CreateTask";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import { useMeQuery } from "./redux/userAuth";
import LoginBeforeHome from "./pages/LoginBeforeHome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Search from "./pages/Search";
import CreateTask from "./pages/CreateTask";
import EditProfile from "./pages/EditProfile";
import NotFound from "./components/notfound/NotFound";
import Loading from "./components/loading/Loading";
import { Suspense } from "react";

function App() {
  const { isLoading, status } = useMeQuery();

  return (
    <BrowserRouter>
      <div className="md:br_1 md:bl_1 m-auto min-h-screen w-full overflow-scroll bg-slate-200 md:w-[50%]">
        {<Navbar />}
        <Suspense fallback={<Loading />} />
        {isLoading && <Loading />}
        <Routes>
          {/* before logged in */}
          <Route
            path="/"
            element={status === "fulfilled" ? <Home /> : <LoginBeforeHome />}
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute
                isLoggedIn={status === "fulfilled" ? true : false}
                children={<Login />}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute
                isLoggedIn={status === "fulfilled" ? true : false}
                children={<Signup />}
              />
            }
          />
          {/* after login  */}
          <Route
            path="/search"
            element={
              <ProtectedRoute
                isLoggedIn={status === "fulfilled" ? false : true}
                children={<Search />}
              />
            }
          />
          <Route
            path="/task/create"
            element={
              <ProtectedRoute
                isLoggedIn={status === "fulfilled" ? false : true}
                children={<CreateTask />}
              />
            }
          />
          <Route
            path="/edit/profile"
            element={
              <ProtectedRoute
                isLoggedIn={status === "fulfilled" ? false : true}
                children={<EditProfile />}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {<Footer />}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
