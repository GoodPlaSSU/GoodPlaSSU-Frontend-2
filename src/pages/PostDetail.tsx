import Comment from "../components/PostDetail/Comment";
import LikeIcon from "../components/Common/LikeIcon";
import PostProfile from "../components/Common/PostProfile";
import { getPostDetail } from "../api/PostDetail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

type Data = {
    id: number;
    cheer_count: number;
    imagesResponse: { imageUrls: string[] };
    updated_at: string;
    writer_id: number;
    writer_portrait: string;
    writer_name: string;
};

const PostDetail = () => {
    const param = useParams();

    const comments = [0, 0, 0, 0, 0, 0];

    const { isLoading, data } = useQuery<Data>({
        queryKey: ["postDetail"],
        queryFn: () => {
            return getPostDetail(param.id!);
        },
    });

    return (
        <div className="p-6">
            <div className="mb-6">
                <div className="flex items-center">
                    <PostProfile url={""} name={""} />
                    <span className="ml-auto text-xs text-title">
                        {"data!.updated_at.substring(0, 10)"}
                    </span>
                </div>
                <div className="my-4 text-left">{"sdfdsfdsfsdfs"}</div>
                <LikeIcon isOn={false} count={0} />
            </div>
            <div>
                <div className="mb-4 text-left font-semibold text-primary">
                    {"comment:"}
                </div>
                {!isLoading &&
                    comments.map((e, i) => (
                        <Comment
                            key={i}
                            profile=""
                            name="Minji Kim"
                            date="2024.10.27"
                            content="sfsdf"
                        />
                    ))}
            </div>
        </div>
    );
};

export default PostDetail;
