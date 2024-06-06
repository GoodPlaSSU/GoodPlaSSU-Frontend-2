import { Route, Routes } from "react-router-dom";
import GoodPostList from "../../pages/GoodPostList";
import JoinPostList from "../../pages/JoinPostList";
import PostWrite from "../../pages/PostWrite";
import PostDetail from "../../pages/PostDetail";
import MyPage from "../../pages/MyPage";
import Login from "../../pages/Login";

const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<GoodPostList />} />
            <Route path="/join" element={<JoinPostList />} />
            <Route path="/write" element={<PostWrite />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default PageRoute;
