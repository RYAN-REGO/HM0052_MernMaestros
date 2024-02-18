/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Group, Code } from "@mantine/core";

import {
  IconBellRinging,
  IconLogout,
  IconUser,
  IconVideo,
  IconUserCog,
} from "@tabler/icons-react";

import classes from "./NavbarSimple.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function Sidebar({ toggle }) {
  const [active, setActive] = useState("Billing");
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const getRole = localStorage.getItem("role");
  console.log(getRole);

  const onClickHandler = (label, event) => {
    event.preventDefault();
    setActive(label);
    if (!user?.currentUser) {
      navigate("/login");
    }
    navigate(label);
  };

  return (
    <nav className={`${classes.navbar} h-[100vh]`}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">

          {/* <MantineLogo size={28} /> */}
          <div className="font-bold text-[20px]">Mentor-Connect</div>
          <Code
            onClick={toggle}
            className="md:hidden cursor-pointer text-md font-bold"
            fw={700}
          >
            Close
          </Code>
        </Group>
        <Link
          className={classes.link}
          data-active={"Notification" === active || undefined}
          onClick={(event) => onClickHandler("/Notification", event)}
        >
          <IconBellRinging className="mr-4" />

          <div className="text-lg font-semibold">Notifications</div>
        </Link>
        {getRole && getRole === "mentor" ? (
          <Link
            className={classes.link}
            data-active={"mentor" === active || undefined}
            onClick={(event) => {
              onClickHandler("/dashboard", event);
            }}
          >
            <IconUser className="mr-4" />
            <div className="text-lg font-semibold">Mentor Dashboard</div>
          </Link>
        ) : (
          <Link
            className={classes.link}
            data-active={"mentor" === active || undefined}
            onClick={(event) => {
              onClickHandler("/", event);
            }}
          >
            <IconUser className="mr-4" />
            <div className="text-lg font-semibold">Find a mentor</div>
          </Link>
        )}
        <Link
          className={classes.link}
          data-active={"join" === active || undefined}
          onClick={(event) => {

            onClickHandler("/applications", event);
          }}
        >
          <IconVideo className="mr-4" />
          <div className="text-lg font-semibold">Join a meet</div>
        </Link>
        <Link
          className={classes.link}
          data-active={"edit" === active || undefined}
          onClick={(event) => {
            onClickHandler("/edit", event);
          }}
        >

          <IconUserCog className="mr-4" />
          <div className="text-lg font-semibold">Edit Profile</div>
        </Link>
        {!user?.currentUser && (
          <Link
            className={`${classes.link} text-white hover:bg-blue-500 hover:text-white bg-blue-400`}
            data-active={"edit" === active || undefined}
            onClick={(event) => {
              onClickHandler("/signup", event);
            }}
          >
            <IconBellRinging className="mr-4" />
            <div className="text-lg font-semibold">Sign Up</div>
          </Link>
        )}
      </div>

      <div className={classes.footer}>
        <Link
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            navigate(`/${getRole}/${user?.currentUser[`${getRole}`].email}` || "/login");
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/81866624?v=4"
            alt="profile"
            className="w-8 h-8 mr-2 rounded-full"
          />
          <span>Profile</span>
        </Link>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          {user?.currentUser === null ? (
            <span
              onClick={(event) => {
                event.preventDefault();
                navigate("/login");
              }}
            >
              Login
            </span>
          ) : (
            <span>Logout</span>
          )}
        </a>
      </div>
    </nav>
  );
}
