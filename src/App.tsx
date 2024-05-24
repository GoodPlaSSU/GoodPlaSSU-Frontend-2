import "./App.css";
import Header from "./components/Header/Header";
import UserHeader from "./components/Common/UserHeader";
import TotalTopUser from "./components/Common/TotalTopUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageRoute from "./components/Common/PageRoute";
import MonthTopUser from "./components/Common/MonthTopUser";

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
                            <div className="h-[calc(100vh-136px)] mb-7 mx-7 p-6 rounded-lg border-[1px] bg-white flex-grow">
                                <PageRoute />
                            </div>
                            <div className="h-[calc(100vh-136px)] rounded-lg flex flex-col gap-6 overflow-scroll">
                                <TotalTopUser />
                                <MonthTopUser />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    );
}

export default App;
