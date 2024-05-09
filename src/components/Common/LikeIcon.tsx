import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const LikeIcon = () => {
    const [like, setLike] = useState(false);

    return (
        <div className="bg-white">
            {like ? (
                <FaHeart
                    className="fill-red-500"
                    size="20"
                    onClick={() => setLike(false)}
                />
            ) : (
                <FaRegHeart
                    className=" fill-icon"
                    size="20"
                    onClick={() => setLike(true)}
                />
            )}
        </div>
    );
};

export default LikeIcon;
