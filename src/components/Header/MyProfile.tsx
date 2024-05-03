import { FaUserCircle } from "react-icons/fa";

const MyProfile = () => {
    return (
        <div>
            <FaUserCircle className="inline fill-gray-700 pb-4" size="72" />
            <div className="text-gray-700 font-bold text-m">{"김민지"}</div>
            <div className="text-gray-700 font-bold text-sm pb-7">
                선행 포인트 : 100
            </div>
        </div>
    );
};

export default MyProfile;
