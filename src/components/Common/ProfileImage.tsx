import { FaUserCircle } from "react-icons/fa";

type ProfileImageType = {
    url: string;
    size: string;
};

const ProfileImage = ({ url, size }: ProfileImageType) => {

    const imageSize : {[key: string] : string} = {
        '42': "w-[42px]",
        '36': "w-9"
    }

    return (
        <>
            if(url === "") {<FaUserCircle className="fill-icon" size={size} />}{" "}
            else{" "}
            {
                <div className={`${imageSize[size]}`}>
                    <img alt="profileImage" src={url} />
                </div>
            }
        </>
    );
};

export default ProfileImage;
