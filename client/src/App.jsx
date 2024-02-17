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

axios.defaults.baseURL = "http://localhost:5000/api/";
const App = () => {
  const [opened, { toggle }] = useDisclosure();
  console.log(toggle, opened);

  return (
    <MantineProvider>
      <div>
        <div className="md:hidden flex items-center">
          <Burger
            opened={opened}
            onClick={toggle}
            className="p-4"
            aria-label="Toggle navigation"
          />
          {opened === true && (
            <div className="absolute z-50 bg-white top-0">
              <Sidebar toggle={toggle} />
            </div>
          )}
          <div>
            <h1 className="text-2xl font-semibold ml-5">AppName</h1>
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
              <Route path="/" element={<FeedPage/>} />
              <Route path="/mentor" element={<MentorProfilePage />} />
              <Route path="/mentee" element={<MenteeProfilePage />} />
              <Route path="/edit" element={<EditProfileForm />} />

              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default App;
