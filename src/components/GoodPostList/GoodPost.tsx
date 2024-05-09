import CommentIcon from "../Common/CommentIcon";
import LikeIcon from "../Common/LikeIcon";
import PostProfile from "../Common/PostProfile";

const GoodPost = () => {
    return (
        <div className="p-6 border-b-[1px]">
            <PostProfile url="" name="minjijijijiral" />
            <div className="my-4 text-left">
                {
                    "안녕안녕 나는 지수야 헬륨가스 먹었더니 요렇게 됐지!!! 이바부야 ~ >_< 안녕하세요 ~ 처음 만난 사람들도 안녕하세요. 워어 안녕안녕안녕 안녕하세요 처음만난사람들도 안녕하세요 짝짞잒 췌 췌 췌키라웃"
                }
            </div>
            <div className="flex gap-4">
                <LikeIcon />
                <CommentIcon />
            </div>
        </div>
    );
};

export default GoodPost;
