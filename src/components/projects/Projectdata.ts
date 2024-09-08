import { ProjectMediaEnum } from "../../enums/enums";

export type ProjectData = {
  title: string;
  date: string;
  what: string;
  videoSrc: string | undefined;
  mediaType: ProjectMediaEnum;
};

export const projectData: ProjectData[] = [
  {
    title: "Beacon",
    date: "2020",
    what: "SOCIAL MEDIA / MOBILE APP",
    videoSrc: "/src/assets/beacon_demo.mp4",
    mediaType: ProjectMediaEnum.Mobile,
  },
  {
    title: "Beacon",
    date: "2020",
    what: "SOCIAL MEDIA / MOBILE APP",
    videoSrc: "",
    mediaType: ProjectMediaEnum.Mobile,
  },
];
