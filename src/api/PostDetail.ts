import { axiosInstance } from ".";

export const getPostDetail = async (id: string) => {
    const response = await axiosInstance.get(`/boards/${id}`);
    console.log(response.data.data);
    return response.data.data;
};

export const writeComment = async ({
    id,
    content,
}: {
    id: number;
    content: string;
}) => {
    axiosInstance
        .post("/comments/", {
            board_id: { id },
            content: { content },
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const writeGoodPost = async (content: string) => {
    axiosInstance
        .post("/boards/", {
            content: { content },
            tag: 0,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const writeJoinPost = async (content: string) => {
    axiosInstance
        .post("/boards/", {
            content: { content },
            tag: 1,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
};