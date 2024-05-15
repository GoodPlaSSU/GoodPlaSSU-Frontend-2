import "./App.css";
import Header from "./components/Header/Header";
import GoodPostList from "./pages/GoodPostList";
import { Route, Routes } from "react-router-dom";
import JoinPostList from "./pages/JoinPostList";
import PostWrite from "./pages/PostWrite";
import PostDetail from "./pages/PostDetail";
import MyPage from "./pages/MyPage";
import UserHeader from "./components/Common/UserHeader";
import TopUser from "./components/Common/TopUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <div className="flex">
                    <div className=" w-[312px] h-screen bh-white border-r-[1px]">
                        <Header />
                    </div>
                    <div className="h-screen flex-1 bg-click">
                        <UserHeader />
                        <div className="flex mt-7">
                            <div className="flex-grow mx-7">
                                <Routes>
                                    <Route
                                        path="/"
                                        element={<GoodPostList />}
                                    />
                                    <Route
                                        path="/join"
                                        element={<JoinPostList />}
                                    />
                                    <Route
                                        path="/write"
                                        element={<PostWrite />}
                                    />
                                    <Route
                                        path="/post/:id"
                                        element={<PostDetail />}
                                    />
                                    <Route
                                        path="/mypage"
                                        element={<MyPage />}
                                    />
                                </Routes>
                            </div>
                            <TopUser />
                        </div>
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    );
}

export default App;
