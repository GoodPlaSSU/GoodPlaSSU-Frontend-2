import { axiosInstance } from ".";

export const getTotalTopUser = async (id: string) => {
    const response = await axiosInstance.get(`/boards/${id}`);
    console.log(response.data.data);
    return response.data.data;
};

export const getMonthTopUser = async (id: string) => {
    const response = await axiosInstance.get(`/boards/${id}`);
    console.log(response.data.data);
    return response.data.data;
};