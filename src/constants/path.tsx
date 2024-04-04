import facebook from "../assets/svg/icon_facebook.svg";
import twitter from "../assets/svg/icon_twitter.svg";
import youtube from "../assets/svg/icon_youtube.svg";
import instagram from "../assets/svg/icon_instagram.svg";
import { Icon } from "../types/type";

export const ROUTES_PATHS = {
  SHARED: "/shared",
  FOLDER: "/folder",
};

export const ICONS: Icon[] = [
  { id: 1, name: "facebook", url: "https://www.facebook.com/", img: facebook },
  { id: 2, name: "twitter", url: "https://twitter.com/", img: twitter },
  { id: 3, name: "youtube", url: "https://www.youtube.com/", img: youtube },
  { id: 4, name: "instagram", url: "https://www.instagram.com/", img: instagram },
];
