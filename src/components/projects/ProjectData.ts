import { ProjectMediaEnum } from "../../enums/enums";
import beaconVideo from "../../assets/beacon_demo.mp4";
import beaconSysD from "../../assets/sysDesigns/beacon_SD.png";

export type ParagraphInfo = {
  title: string;
  content: string;
};

type ProjectData = {
  title: string;
  date: string;
  what: string;
  videoSrc: string | undefined;
  sysDSrc: string;
  gitSrc: string;
  mediaType: ProjectMediaEnum;
  paragraphs: ParagraphInfo[];
};

export const PROJECT_DATA: ProjectData[] = [
  {
    title: "Beacon",
    date: "2020",
    what: "SOCIAL MEDIA / MOBILE APP",
    videoSrc: beaconVideo,
    sysDSrc: beaconSysD,
    gitSrc: "https://github.com/Chambo88/BeaconV1",
    mediaType: ProjectMediaEnum.Mobile,
    paragraphs: [
      {
        title: "PROBLEM",
        content:
          "Beacon aims to solve two problems; the lack of a simple UI to view whats on and \
           invites being bound to group chats and DM's. \
           People very rarely reach out outside of their usual group chats for anything outside \
           of big events that require a Facebook page despite having many more connections. ",
      },
      {
        title: "SOLUTION",
        content:
          "By using beacons, users can make events in seconds displayed to personalised friend groups \
           changing the method of invitation to broadcasting. \
           By using a map layout, users can instantly see what friends are out, beacons that friends have invited you to \
           and gigs on for the evening",
      },
    ],
  },
  {
    title: "Beacon",
    date: "2020",
    what: "SOCIAL MEDIA / MOBILE APP",
    videoSrc: "",
    sysDSrc: "/src/sysDesigns/beacon_SD.png",
    gitSrc: "https://github.com/Chambo88/BeaconV1",
    mediaType: ProjectMediaEnum.Mobile,
    paragraphs: [
      {
        title: "PROBLEM",
        content:
          "SOME RANDN JHGHGHHGGH HGHG HGHG HGhh ghghgh sshsdn time is running out. when your rocking with me its so good when you do said it feels sso good never wanted to leave .",
      },
      {
        title: "SOLUTION",
        content:
          "SOME RANDN JHGHGHHGGH HGHG HGHG HGhh ghghgh sshsdn time is running out. when your rocking with me its so good when you do said it feels sso good never wanted to leave .",
      },
    ],
  },
];
