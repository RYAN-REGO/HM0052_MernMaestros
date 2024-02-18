import "@mantine/core/styles.css";
import { Burger, MantineProvider } from "@mantine/core";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useDisclosure } from "@mantine/hooks";
import MentorProfilePage from "./pages/MentorProfilePage";
import MenteeProfilePage from "./pages/MenteeProfile";
import EditProfileForm from "./components/Form/EditProfileForm";
import { Route, Routes } from "react-router-dom";
import FeedPage from "./pages/Feed/Feed";
import axios from "axios";

import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/work-sans";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import SignUp from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import MentorDashboard from "./pages/MentorDashboard/MentorDashboard";

import MentorCall from "./pages/MentorCall";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditMentorProfile from "./components/Form/EditMentorForm";

axios.defaults.baseURL = "http://localhost:5000/api/";
// axios.defaults.baseURL = "https://mentor-connect.onrender.com/api";
// axios.defaults.withCredentials = true;
const App = () => {
  const [opened, { toggle }] = useDisclosure();
  console.log(toggle, opened);

  return (
    <MantineProvider>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
        <ToastContainer />

        <div className="md:hidden flex items-center">
          <Burger
            opened={opened}
            onClick={toggle}
            className=""
            aria-label="Toggle navigation"
          />
          {opened === true && (
            <div className="absolute z-50 bg-white top-0">
              <Sidebar toggle={toggle} />
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold ml-5">AppName</h1>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="hidden md:flex flex-row">
            <Sidebar toggle={toggle} />
          </div>
          {/* all routes goes here */}
          <div className="p-4 w-full">
            <div>
              <Routes>
                <Route path="/" element={<FeedPage />} />
                <Route path="/mentor/:id" element={<MentorProfilePage />} />
                <Route path="/mentee/:id" element={<MenteeProfilePage />} />
                <Route path="/edit" element={<EditProfileForm />} />

                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />

                <Route path="/dashboard" element={<MentorDashboard />} />

                <Route path="/room/:roomId" element={<MentorCall/>}/>

                <Route path="/edit-mentor" element={<EditMentorProfile />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default App;
