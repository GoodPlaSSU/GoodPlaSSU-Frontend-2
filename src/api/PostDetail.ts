import { axiosInstance } from ".";

export const getPostDetail = async (id: string) => {
    const response = await axiosInstance.get(`/boards/${id}`);
    console.log(response.data.data);
    return response.data.data;
};
