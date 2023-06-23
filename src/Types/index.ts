export interface Thumbnail {
  height: number;
  url: string;
  width: number;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  thumbnail: Thumbnail;
  updatedAt: string;
}

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: string };
};
