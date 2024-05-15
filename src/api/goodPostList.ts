import { axiosInstance } from ".";

export const getGoodPostList = async (page: number) => {
    const response = await axiosInstance.get("/boards", {
        params: { tag: 0, page: page },
    });
    console.log(response.data.data.content);
    return response.data.data;
};
