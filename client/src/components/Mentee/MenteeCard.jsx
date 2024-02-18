import { Avatar, Text, Group } from "@mantine/core";
// import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import classes from "./MenteeCard.module.css";
import ProfilePhoto from "../../assets/mentor.png";

const MenteeCard = () => {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar src={ProfilePhoto} size={94} radius="md" />
        <div>
          <Text fz="lg" fw={500} className={classes.name}>
            Robert Glassbreaker
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
