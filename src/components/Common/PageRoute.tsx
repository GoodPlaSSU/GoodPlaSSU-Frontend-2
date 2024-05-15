import { Route, Routes } from "react-router-dom";
import GoodPostList from "../../pages/GoodPostList";
import JoinPostList from "../../pages/JoinPostList";
import PostWrite from "../../pages/PostWrite";
import PostDetail from "../../pages/PostDetail";
import MyPage from "../../pages/MyPage";

const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<GoodPostList />} />
            <Route path="/join" element={<JoinPostList />} />
            <Route path="/write" element={<PostWrite />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/mypage" element={<MyPage />} />
        </Routes>
    );
};

export default PageRoute;
