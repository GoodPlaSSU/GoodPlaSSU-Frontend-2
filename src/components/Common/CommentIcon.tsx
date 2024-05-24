import { FaRegComment } from "react-icons/fa6";

const CommentIcon = ({ count }: { count: number }) => {
    return (
        <div className="flex items-center">
            <FaRegComment className=" fill-icon" size="20" />
            <span className="ml-2 text-text text-sm">{count}</span>
        </div>
    );
};

export default CommentIcon;
