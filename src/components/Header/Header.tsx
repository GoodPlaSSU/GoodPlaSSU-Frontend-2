import * as M from "./Menus";
import MyProfile from "./MyProfile";

const Header = () => {
    return (
        <div className="grid w-40 items-center pt-6">
            <MyProfile />
            <M.LoginMenu />
            <M.GoodPostMenu />
            <M.JoinPostMenu />
            <M.MyPageMenu />
        </div>
    );
};

export default Header;
