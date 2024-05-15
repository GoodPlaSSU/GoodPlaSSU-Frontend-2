import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

type LikeType = {
    isOn: boolean;
    count: number;
};

const LikeIcon = ({ isOn, count }: LikeType) => {
    const [like, setLike] = useState(isOn);

    return (
        <div className="flex items-center bg-white">
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
            <span className="ml-2 text-text text-sm">{count}</span>
        </div>
    );
};

export default LikeIcon;
