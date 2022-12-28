import { PageInfo } from "../types/typings";

export const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
  } catch (error) {
    console.error(error);
  }
};
