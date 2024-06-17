import { FaRegImage, FaXmark } from "react-icons/fa6";
import PostProfile from "../components/Common/PostProfile";
import { useRef, useState } from "react";
import { writeGoodPost, writeJoinPost } from "../api/PostDetail";

const PostWrite = () => {
    const writeRef = useRef<any>(null);

    const contentRef = useRef<any>(null);

    const [imageFiles, setImageFiles] = useState<string[]>([]);

    const [postType, setPostType] = useState(0);

    const [content, setContent] = useState("");

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
        if (contentRef.current) {
            contentRef.current.style.height = `auto`;
            contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
            writeRef.current.scrollTop = writeRef.current.scrollHeight;
        }
    };

    const clickHandler = () => {
        if (postType === 0) {
            writeGoodPost(content);
        } else {
            writeJoinPost(content);
        }
    };

    const postTypeHandler = (post: number) => {
        if (post === 0) {
            setPostType(0);
        } else {
            setPostType(1);
        }
    };

    const addImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        let tmp = e.target.files;
        if (tmp) {
            const reader = new FileReader();
            reader.readAsDataURL(tmp[0]);
            reader.onloadend = () => {
                if (imageFiles.length < 3 && reader.result) {
                    setImageFiles((prev) => [...prev, reader.result as string]);
                }
            };
        }
    };

    const removeImageFile = (idx: number) => {
        setImageFiles(imageFiles.filter((e, i) => i !== idx));
    };

    return (
        <div
            className="inline-flex w-full h-full overflow-scroll text-center"
            ref={writeRef}
        >
            <div className="inline-flex w-[50%] m-6">
                <form className="w-full">
                    <PostProfile url="" name="Minji Kim" />
                    <div className="w-full">
                        <textarea
                            className="w-full p-3 mt-3 border-2 outline-none resize-none border-primary rounded-xl"
                            placeholder="내용"
                            onChange={changeHandler}
                            value={content}
                            rows={10}
                            ref={contentRef}
                        ></textarea>
                    </div>
                </form>
            </div>
            <div className="w-[50%] text-left">
                <div className="inline-flex gap-1 p-1 bg-white rounded-full drop-shadow-lg">
                    <span
                        className={`px-3 py-1 rounded-full ${
                            !postType ? "bg-primary text-white" : "text-title"
                        }`}
                        onClick={() => postTypeHandler(0)}
                    >
                        선행 게시판
                    </span>
                    <span
                        className={`px-3 py-1 rounded-full ${
                            postType ? "bg-primary text-white" : "text-title"
                        }`}
                        onClick={() => postTypeHandler(1)}
                    >
                        참여 게시판
                    </span>
                </div>
                <div>
                    <label htmlFor="imageInput">
                        <div className="inline-flex items-center px-3 py-1 mt-3 text-white rounded-full bg-primary">
                            <FaRegImage className="inline mr-2" />
                            사진 올리기
                        </div>
                    </label>
                    <input
                        className="hidden"
                        id="imageInput"
                        accept=".png, .jpeg, .jpg"
                        type="file"
                        onChange={addImageFile}
                    />
                </div>

                {imageFiles.map((e, i) => (
                    <div className="relative inline-flex">
                        <FaXmark
                            className="absolute top-0.5 right-0.5 m-3"
                            onClick={() => removeImageFile(i)}
                        />
                        <img
                            className="inline object-cover w-24 h-24 m-3 "
                            key={i}
                            src={e}
                            alt={`Upload File[${i}]`}
                        />
                    </div>
                ))}
                <div>
                    <div
                        className="inline-flex px-3 py-1 mt-3 text-white rounded-full bg-primary"
                        onClick={() => clickHandler()}
                    >
                        게시
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostWrite;
