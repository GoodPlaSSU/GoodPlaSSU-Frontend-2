import {
    FaRegThumbsUp,
    FaRegHand,
    FaRegUser,
    FaArrowRightToBracket,
} from "react-icons/fa6";

export const GoodPostMenu = () => {
    return (
        <div className="group inline-flex w-[248px] h-[46px] m-2 items-center rounded-lg hover:bg-click">
            <FaRegThumbsUp
                className="ml-5 mr-2 fill-text group-hover:fill-primary"
                size="16"
                color="gray"
            />
            <p className="text-text group-hover:text-primary font-bold text-sm ">
                선행 게시판
            </p>
        </div>
    );
};

export const JoinPostMenu = () => {
    return (
        <div className="group inline-flex w-[248px] h-[46px] m-2 items-center rounded-lg hover:bg-click">
            <FaRegHand
                className="ml-5 mr-2 fill-text group-hover:fill-primary"
                size="16"
                color="gray"
            />
            <p className="text-text group-hover:text-primary font-bold text-sm ">
                참여 게시판
            </p>
        </div>
    );
};

export const MyPageMenu = () => {
    return (
        <div className="group inline-flex w-[248px] h-[46px] m-2 items-center rounded-lg hover:bg-click">
            <FaRegUser
                className="ml-5 mr-2 fill-text group-hover:fill-primary"
                size="16"
                color="gray"
            />
            <p className="text-text group-hover:text-primary font-bold text-sm ">
                마이 페이지
            </p>
        </div>
    );
};

export const LoginMenu = () => {
    return (
        <div className="group inline-flex w-[248px] h-[46px] m-2 items-center rounded-lg hover:bg-click">
            <FaArrowRightToBracket
                className="ml-5 mr-2 fill-text group-hover:fill-primary"
                size="16"
                color="gray"
            />
            <p className="text-text group-hover:text-primary font-bold text-sm ">
                로그인
            </p>
        </div>
    );
};
