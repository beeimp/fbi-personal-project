import { userInfoType } from "./user";

type contentsType = {
  id: number;
  image_urls: Array<string>;
  article: string;
  create_date: number;
  hashtag: Array<string>;
  up_voting: number;
  down_voting: number;
};

type commentType = {
  id: string;
  user_info: userInfoType;
  comment: string;
  create_date: number;
  up_voting: number;
  down_voting: number;
}

export type {
  contentsType,
  commentType
};