import {
    FaRegThumbsUp,
    FaRegHandPaper,
    FaRegUser,
    FaArrowRight,
} from "react-icons/fa";

export const GoodPostMenu = () => {
    return (
        <div className="group inline-flex w-48 h-9 m-2 items-center rounded-lg hover:bg-gray-100">
            <FaRegThumbsUp
                className="mx-4 fill-basic group-hover:fill-primary"
                size="20"
                color="gray"
            />
            <p className="text-basic group-hover:text-primary font-bold text-sm ">
                선행 게시판
            </p>
        </div>
    );
};

export const JoinPostMenu = () => {
    return (
        <div className="group inline-flex w-48 h-9 m-2 items-center rounded-lg hover:bg-gray-100">
            <FaRegHandPaper
                className="mx-4 fill-basic group-hover:fill-primary"
                size="20"
                color="gray"
            />
            <p className="text-basic group-hover:text-primary font-bold text-sm ">
                참여 게시판
            </p>
        </div>
    );
};

export const MyPageMenu = () => {
    return (
        <div className="group inline-flex w-48 h-9 m-2 items-center rounded-lg hover:bg-gray-100">
            <FaRegUser
                className="mx-4 fill-basic group-hover:fill-primary"
                size="20"
                color="gray"
            />
            <p className="text-basic group-hover:text-primary font-bold text-sm ">
                마이 페이지
            </p>
        </div>
    );
};

export const LoginMenu = () => {
    return (
        <div className="group inline-flex w-48 h-9 m-2 items-center rounded-lg hover:bg-gray-100">
            <FaArrowRight
                className="mx-4 fill-basic group-hover:fill-primary"
                size="20"
                color="gray"
            />
            <p className="text-basic group-hover:text-primary font-bold text-sm ">
                로그인
            </p>
        </div>
    );
};
