import React, { useState } from "react";
import "@mantine/core/styles.css";
import { Burger, MantineProvider } from "@mantine/core";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useDisclosure } from "@mantine/hooks";
import MentorProfilePage from "./components/Mentor/MentorProfilePage";
import MenteeProfilePage from "./components/Mentee/MenteeProfilePage";

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
          <div className="hidden md:flex flex-row w-1/2">
            <Sidebar toggle={toggle} />
          </div>
          {/* all routes goes here */}
          <div className="p-4">
            <div>
              {/* <MentorProfilePage /> */}
              <MenteeProfilePage />
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default App;
