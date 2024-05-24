import ProfileImage from "./ProfileImage";

export type Props = {
    name: string;
    point: number;
    profile: string;
};

const UserPointProfile = ({ name, point, profile }: Props) => {
    return (
        <div className="inline-flex w-52 py-[6px] my-[3px] items-center">
            <ProfileImage url={profile} size="42" />
            <div className="ml-2 text-start text-xs text-text">
                <div className="font-semibold">{name}</div>
                <div className="font-medium">선행 포인트: {point}</div>
            </div>
        </div>
    );
};

export default UserPointProfile;
