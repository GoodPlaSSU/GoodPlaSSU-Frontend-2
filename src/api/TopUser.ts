import { axiosInstance } from ".";

export const getTotalTopUser = async () => {
    const response = await axiosInstance.get(`/members/total`);
    console.log(response.data.data);
    return response.data.data;
};

export const getMonthTopUser = async () => {
    const response = await axiosInstance.get(`/members/month`);
    console.log(response.data.data);
    return response.data.data;
};