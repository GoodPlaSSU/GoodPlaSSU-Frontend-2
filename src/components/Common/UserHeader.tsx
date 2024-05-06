import { FaUserCircle } from "react-icons/fa";

const UserHeader = () => {
    return (
        <div className="flex h-20 items-center justify-end bg-white border-b-2 text-sm font-semibold text-text">
            <span className="mr-2">
                <FaUserCircle className="fill-icon" size="36" />
            </span>
            <span>김민지</span>
            <span className="mr-20 font-medium">{"님, 안녕하세요!"}</span>
        </div>
    );
};

export default UserHeader;
