import * as M from "./Menus";
import MyProfile from "./MyProfile";

const Header = () => {
    return (
        <div className="inline-block w-64 h-screen pt-24 bg-white shadow-lg">
            <MyProfile />
            <M.LoginMenu />
            <M.GoodPostMenu />
            <M.JoinPostMenu />
            <M.MyPageMenu />
        </div>
    );
};

// myprofile 같은 경우는 나중에 img 링크 props로 넘겨줘야 함
// header는 useEffect로 로그인 되어있는지 확인하고 로그인 되어있으면 Myprofile 띄우고 안되어있으면 loginMenu 띄워야 함!

export default Header;
