import CommentIcon from "../Common/CommentIcon";
import LikeIcon from "../Common/LikeIcon";
import PostProfile from "../Common/PostProfile";

type goodPostType = {
    id:number,
    name: string;
    profile: string;
    content: string;
    like: number;
    isOn: boolean;
    comment: number
};

const GoodPost = ({ id,name, profile, content, like, isOn, comment }: goodPostType) => {
    return (
        <div className="p-6 border-b-[1px]">
            <PostProfile url={profile} name={name} />
            <div className="my-4 text-left">{content}</div>
            <div className="flex gap-4">
                <LikeIcon isOn={isOn} count={like} postId={id}/>
                <CommentIcon count={comment}/>
            </div>
        </div>
    );
};

export default GoodPost;
