import Comment from "../components/PostDetail/Comment";
import LikeIcon from "../components/Common/LikeIcon";
import PostProfile from "../components/Common/PostProfile";
import { getPostDetail } from "../api/PostDetail";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import CommentWrite from "../components/PostDetail/CommentWrite";

type Data = {
    id: number;
    like_count: number;
    images: { imageUrls: string[] };
    content: string;
    updated_at: string;
    writer_id: number;
    writer_profile: string;
    writer_name: string;
    comments: string[];
};

const PostDetail = () => {
    const param = useParams();

    const comments = [0, 0, 0, 0, 0, 0];

    const detailRef = useRef<any>(null);

    const scrollToBottom = () => {
        detailRef.current.scrollTop = detailRef.current.scrollHeight;
    };

    const { isPending, data } = useQuery<Data>({
        queryKey: ["postDetail"],
        queryFn: () => {
            return getPostDetail(param.id!);
        },
    });

    return (
        <div className="w-full h-full overflow-scroll" ref={detailRef}>
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
                    <div className="mb-4 font-semibold text-left text-primary">
                        {"comment"}
                    </div>
                    {!isPending &&
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
            <CommentWrite scrollHandler={scrollToBottom} />
        </div>
    );
};

export default PostDetail;
