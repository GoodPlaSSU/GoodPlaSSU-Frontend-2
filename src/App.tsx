import "./App.css";
import Header from "./components/Header/Header";
import GoodPostList from "./pages/GoodPostList";
import { Route, Routes } from "react-router-dom";
import JoinPostList from "./pages/JoinPostList";
import PostWrite from "./pages/PostWrite";
import PostDetail from "./pages/PostDetail";
import MyPage from "./pages/MyPage";
import UserHeader from "./components/Common/UserHeader";

function App() {
    return (
        <div className="App">
            <div className="flex">
                <div className=" w-[312px] h-screen bh-white border-r-2">
                    <Header />
                </div>
                <div className="h-screen flex-grow bg-click">
                    <UserHeader />
                    <Routes>
                        <Route path="/" element={<GoodPostList />} />
                        <Route path="/join" element={<JoinPostList />} />
                        <Route path="/write" element={<PostWrite />} />
                        <Route path="/post/:id" element={<PostDetail />} />
                        <Route path="/mypage" element={<MyPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
