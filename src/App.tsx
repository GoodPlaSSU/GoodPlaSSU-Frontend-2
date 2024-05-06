import "./App.css";
import ContentHeader from "./components/Common/ContentHeader";
import Header from "./components/Header/Header";
import GoodPostList from "./pages/GoodPostList";

function App() {
    return (
        <div className="App">
            <div className="inline-flex justify-center">
                <div className="w-64 h-screen bh-white shadow-lg z-10">
                    <Header />
                </div>
                <div className="h-screen w-[40vw] bg-bg1">
                    <ContentHeader menu={"선행 게시판"} />
                    <GoodPostList />
                </div>
            </div>
        </div>
    );
}

export default App;
