/* eslint-disable react/prop-types */
import { Avatar, Text, Group } from "@mantine/core";
// import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import classes from "./MenteeCard.module.css";
import ProfilePhoto from "../../assets/mentor.png";

const MenteeCard = ({mentee}) => {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar src={mentee.profilePicture || ProfilePhoto} size={94} radius="md" />
        <div>
          <Text fz="lg" fw={500} className={classes.name}>
            {mentee.firstName} {mentee.lastName}
          </Text>

          <Text fz="xs" fw={700} c="dimmed">
            Student
          </Text>
        </div>
      </Group>
    </div>
  );
};

export default MenteeCard;
