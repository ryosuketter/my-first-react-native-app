import axios, { AxiosInstance } from "axios";
import { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } from "@env";

const client: AxiosInstance = axios.create({
  baseURL: `https://${MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1`,
  headers: { "X-API-KEY": MICROCMS_API_KEY },
});

export const fetchPosts = async () => {
  try {
    const response = await client.get("/news");
    return response.data.contents;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};

export const fetchPostById = async (id: string) => {
  try {
    const response = await client.get(`/news/${id}`);
    return response.data;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};
