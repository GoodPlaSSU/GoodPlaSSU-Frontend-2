import { FaThumbsUp, FaHandPaper, FaUser, FaLock } from "react-icons/fa";

export const GoodPostMenu = () => {
    return (
        <div className="inline-flex w-48 h-9 items-center rounded-lg hover:bg-gray-100">
            <FaThumbsUp className="mx-4 fill-basic" size="20" color="gray" />
            <p className="text-basic font-bold text-sm">선행 게시판</p>
        </div>
    );
};

export const JoinPostMenu = () => {
    return (
        <div className="inline-flex w-48 h-9 items-center rounded-lg hover:bg-gray-100">
            <FaHandPaper className="mx-4 fill-basic" size="20" color="gray" />
            <p className="text-basic font-bold text-sm">참여 게시판</p>
        </div>
    );
};

export const MyPageMenu = () => {
    return (
        <div className="inline-flex w-48 h-9 items-center rounded-lg hover:bg-gray-100">
            <FaUser className="mx-4 fill-basic" size="20" color="gray" />
            <p className="text-basic font-bold text-sm">마이 페이지</p>
        </div>
    );
};

export const LoginMenu = () => {
    return (
        <div className="inline-flex w-48 h-9 items-center rounded-lg hover:bg-gray-100">
            <FaLock className="mx-4 fill-basic" size="20" color="gray" />
            <p className="text-basic font-bold text-sm">로그인</p>
        </div>
    );
};
