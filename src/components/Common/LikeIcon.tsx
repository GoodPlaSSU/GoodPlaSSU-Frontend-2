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
                    onClick={(e) => {
                        setLike(false);
                        e.stopPropagation();
                    }}
                />
            ) : (
                <FaRegHeart
                    className=" fill-icon"
                    size="20"
                    onClick={(e) => {setLike(true); e.stopPropagation();}}
                />
            )}
            <span className="ml-2 text-sm text-text">{count}</span>
        </div>
    );
};

export default LikeIcon;
