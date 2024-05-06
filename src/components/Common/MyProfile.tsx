import { FaUserCircle } from "react-icons/fa";

const MyProfile = () => {
    return (
        <div>
            <FaUserCircle className="inline fill-text mt-24 pb-4" size="84" />
            <div className="text-text font-bold text-m pb-3">{"김민지"}</div>
            <div className="text-text font-bold text-sm pb-20">
                <span>{"선행 포인트 : "}</span>
                <span className="text-primary">{100}</span>
            </div>
        </div>
    );
};

export default MyProfile;
