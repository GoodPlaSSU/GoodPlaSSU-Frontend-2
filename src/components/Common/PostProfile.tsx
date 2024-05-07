import ProfileImage from "./ProfileImage";

type PostProfileType = {
    url: string,
    name: string
}

const PostProfile = ({url, name}: PostProfileType) => {
    return (
        <div className="flex items-center">
            <ProfileImage url={url} size="34" />
            <span className="ml-2 text-base font-semibold text-text">{name}</span>
        </div>
    );
};

export default PostProfile;
