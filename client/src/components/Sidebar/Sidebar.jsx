/* eslint-disable react/prop-types */
import { useState } from "react";
import { Group, Code } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./NavbarSimple.module.css";
import { X } from "lucide-react";

const data = [
  { link: "", label: "Notification", icon: IconBellRinging },
  { link: "", label: "Find Mentor", icon: IconReceipt2 },
  { link: "", label: "Join Meet", icon: IconFingerprint },
  // { link: "", label: "SSH Keys", icon: IconKey },
  // { link: "", label: "Databases", icon: IconDatabaseImport },
  // { link: "", label: "Authentication", icon: Icon2fa },
  // { link: "", label: "Other Settings", icon: IconSettings },
];

export function Sidebar({ toggle }) {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={`{classes.link} `}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={`${classes.navbar} h-[100vh]`}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <h1 className="text-2xl font-bold text-blue-500">AppName</h1>
          <Code onClick={toggle} className="md:hidden cursor-pointer">
            <X />
          </Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Profile</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
