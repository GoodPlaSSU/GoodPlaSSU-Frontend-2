import * as M from "./Menus";

const Header = () => {
    return (
        <div className="grid">
            <M.LoginMenu />
            <M.GoodPostMenu />
            <M.JoinPostMenu />
            <M.MyPageMenu />
        </div>
    );
};

export default Header;
