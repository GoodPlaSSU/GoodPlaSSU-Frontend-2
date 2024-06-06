import {  useRef, useState } from "react";
import ProfileImage from "../Common/ProfileImage";

const CommentWrite = ({scrollHandler}:{scrollHandler: () => void}) => {
    const [comment, setComment] = useState("");

    const textRef = useRef<any>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
        if (textRef.current) {
            textRef.current.style.height = `auto`;
            textRef.current.style.height = `${textRef.current.scrollHeight}px`;
            scrollHandler()
        }
    };

    return (
        <div className="flex gap-3 mt-6 bg-white">
            <ProfileImage url="" size="24" />
            <div className="flex flex-col w-full p-3 border-2 border-primary rounded-xl">
                <textarea
                    className="w-full overflow-hidden align-top outline-none resize-none "
                    placeholder="댓글을 입력하세요."
                    value={comment}
                    ref={textRef}
                    onChange={(e) => {
                        changeHandler(e);
                    }}
                />
                <div className="flex">
                    <button className="px-2 py-1 ml-auto text-white rounded-lg bg-primary">
                        등록
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentWrite;
