import { axiosInstance } from ".";

export const getPostDetail = async (id: string) => {
    const response = await axiosInstance.get(`/boards/${id}`);
    console.log(response.data.data);
    return response.data.data;
};

export const postComment = async ({
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
