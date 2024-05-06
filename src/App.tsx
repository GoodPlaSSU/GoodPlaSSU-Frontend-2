import "./App.css";
import ContentHeader from "./components/Common/ContentHeader";
import Header from "./components/Header/Header";
import GoodPostList from "./pages/GoodPostList";
import { Route, Routes } from "react-router-dom";
import JoinPostList from "./pages/JoinPostList";
import PostWrite from "./pages/PostWrite";
import PostDetail from "./pages/PostDetail";
import MyPage from "./pages/MyPage";

function App() {
    return (
        <div className="App">
            <div className="inline-flex justify-center">
                <div className="w-64 h-screen bh-white shadow-lg z-10">
                    <Header />
                </div>
                <div className="h-screen w-72 bg-bg1">
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
