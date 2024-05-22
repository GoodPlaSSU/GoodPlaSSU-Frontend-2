import ProfileImage from "../Common/ProfileImage";

type CommentType = {
    profile: string;
    name: string;
    date: string;
    content: string;
};

const Comment = ({ profile, name, date, content }: CommentType) => {
    return (
        <div className="p-3 bg-[#f5f5f5] rounded-xl my-3">
            <div className="flex items-center">
                <ProfileImage url={profile} size="20" />
                <div>
                    <div className="pl-2 text-bold text-sm text-primary">
                        {name}
                    </div>
                </div>
                <div className="ml-auto text-medium text-xs text-title">
                    {date}
                </div>
            </div>
            <div className="pl-7 text-base text-semibold text-text text-left">
                {content}
            </div>
        </div>
    );
};

export default Comment;
