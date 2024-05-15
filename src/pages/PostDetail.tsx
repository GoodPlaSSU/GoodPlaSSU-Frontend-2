import Comment from "../components/Common/Comment";
import LikeIcon from "../components/Common/LikeIcon";
import PostProfile from "../components/Common/PostProfile";

const PostDetail = () => {
    return (
        <div className="p-6">
            <div className="mb-6">
                <div className="flex items-center">
                    <PostProfile url="" name="minji" />
                    <span className="ml-auto text-xs text-title">
                        {"2024.01.02"}
                    </span>
                </div>
                <div className="my-4 text-left">{"sdfdsfdsfsdfs"}</div>
                <LikeIcon isOn={false} count={12312} />
            </div>
            <div>
                <div className="mb-4 text-left font-semibold text-primary">
                    {"comment:"}
                </div>
                <Comment
                    profile=""
                    name="Minji Kim"
                    date="2024.10.27"
                    content="sfsdf"
                />
            </div>
        </div>
    );
};

export default PostDetail;
