import ProfileImage from "./ProfileImage";

const UserHeader = () => {
    return (
        <div className="flex h-20 items-center justify-end bg-white border-b-[1px] text-sm font-semibold text-text">
            <span className="mr-4">
                <ProfileImage url="" size="36" />
            </span>
            <span>김민지</span>
            <span className="mr-20 font-medium">{"님, 안녕하세요!"}</span>
        </div>
    );
};

export default UserHeader;

