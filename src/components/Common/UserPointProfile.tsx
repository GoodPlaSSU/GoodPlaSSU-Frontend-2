import ProfileImage from "./ProfileImage";

export type UserPointInfo = {
    name: string;
    point: number;
    profile: string;
};

type UserPointInfoProps = {
    userinfo: UserPointInfo;
};

const UserPointProfile = ({ userinfo }: UserPointInfoProps) => {
    return (
        <div className="inline-flex w-52 py-[6px] my-[3px] items-center">
            <ProfileImage url={userinfo.profile} size="42" />
            <div className="ml-2 text-start text-xs text-text">
                <div className="font-semibold">{userinfo.name}</div>
                <div className="font-medium">선행 포인트: {userinfo.point}</div>
            </div>
        </div>
    );
};

export default UserPointProfile;
