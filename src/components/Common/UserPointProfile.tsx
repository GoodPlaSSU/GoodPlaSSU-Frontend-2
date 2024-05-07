import ProfileImage from "./ProfileImage";

interface UserInfo {
    name: String;
    point: Number;
    profile: String;
}

const UserPointProfile = () => {
    return (
        <div className="inline-flex w-52 py-[6px] my-[3px] items-center">
            <ProfileImage url="" size="42" />
            <div className="ml-2 text-start text-xs text-text">
                <div className="font-semibold">Minji Kim</div>
                <div className="font-medium">선행 포인트: 433</div>
            </div>
        </div>
    );
};

export default UserPointProfile;
