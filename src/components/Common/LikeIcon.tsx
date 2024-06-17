import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { postLike } from "../../api/PostDetail";

type LikeType = {
    isOn: boolean;
    count: number;
    postId: number;
};

const LikeIcon = ({ isOn, count, postId }: LikeType) => {
    const [like, setLike] = useState(isOn);

    const clickHandler = () => {
        setLike((prev) => !prev);
        postLike(postId);
    };

    return (
        <div className="flex items-center bg-white">
            {like ? (
                <FaHeart
                    className="fill-red-500"
                    size="20"
                    onClick={(e) => {
                        clickHandler();
                        e.stopPropagation();
                    }}
                />
            ) : (
                <FaRegHeart
                    className=" fill-icon"
                    size="20"
                    onClick={(e) => {
                        clickHandler();
                        e.stopPropagation();
                    }}
                />
            )}
            <span className="ml-2 text-sm text-text">{count}</span>
        </div>
    );
};

export default LikeIcon;
