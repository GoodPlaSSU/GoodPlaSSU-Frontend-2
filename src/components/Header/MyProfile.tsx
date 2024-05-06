import { FaUserCircle } from "react-icons/fa";

const MyProfile = () => {
    return (
        <div>
            <FaUserCircle className="inline fill-basic pb-4" size="84" />
            <div className="text-basic font-bold text-m">{"김민지"}</div>
            <div className="text-basic font-bold text-sm pb-24">
                선행 포인트 : 100
            </div>
        </div>
    );
};

export default MyProfile;
