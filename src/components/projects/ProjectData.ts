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
          "Beacon aims to solve two problems, one is the lack of a simple UI to view whats on, \
           two is the fact invites are bound by group chats and direct messages. \
           People very rarely reach out outside of their usual group chats for anything outside \
           of events that require a facebook event page despite having far more connections. ",
      },
      {
        title: "SOLUTION",
        content:
          "By using beacons, users can make events in seconds displayed to personalised friend groups \
           changing the method of invitation to broadcasting, similar to how a story functions. \
           By using a map layout, users can instantly see what friends are out and where, bars or flats that friends have invited you too \
           and gigs/live events on for the evening",
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
