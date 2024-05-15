import CommentIcon from "../Common/CommentIcon";
import LikeIcon from "../Common/LikeIcon";
import PostProfile from "../Common/PostProfile";

type goodPostType = {
    name: string;
    profile: string;
    content: string;
    like: number;
};

const GoodPost = ({ name, profile, content, like }: goodPostType) => {
    return (
        <div className="p-6 border-b-[1px]">
            <PostProfile url={profile} name={name} />
            <div className="my-4 text-left">{content}</div>
            <div className="flex gap-4">
                <LikeIcon />
                <CommentIcon />
            </div>
        </div>
    );
};

export default GoodPost;
