import { Avatar, Text, Group } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import classes from "./MentorCard.module.css";
import ProfilePhoto from "../../assets/mentor.png";

const MentorCard = () => {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar src={ProfilePhoto} size={94} radius="md" />
        <div>
          <Text fz="lg" fw={500} className={classes.name}>
            Robert Glassbreaker
          </Text>

          <Text fz="xs" fw={700} c="dimmed">
            Software engineer @Amazon
          </Text>

          {/* <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              robert@glassbreaker.io
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              +11 (876) 890 56 23
            </Text>
          </Group> */}
        </div>
      </Group>
    </div>
  );
};

export default MentorCard;
