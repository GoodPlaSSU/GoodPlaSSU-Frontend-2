import PostProfile from "../components/Common/PostProfile";

const PostWrite = () => {
    return (
        <div>
            <form>
                <PostProfile url="" name="Minji Kim" />
                <div>
                <textarea className="resize-none" placeholder="내용"></textarea>
                </div>
                <div>
                <input type="file" name="selectFile" />
                </div>
            </form>
        </div>
    );
};

export default PostWrite;
