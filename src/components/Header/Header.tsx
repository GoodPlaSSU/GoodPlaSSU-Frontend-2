import * as M from "./Menus";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="align-top">
            <img
                alt="logo"
                src="/logo1.png"
                className="inline-flex w-[218px] my-[52px]"
            />
            <Link to={"/login"}>
                <M.LoginMenu />
            </Link>
            <Link to={"/"}>
                <M.GoodPostMenu />
            </Link>
            <Link to={"/join"}>
                <M.JoinPostMenu />
            </Link>
            <Link to={"/mypage"}>
                <M.MyPageMenu />
            </Link>
            <Link to={"/write"}>
                <M.WriteMenu />
            </Link>
        </div>
    );
};

// myprofile 같은 경우는 나중에 img 링크 props로 넘겨줘야 함
// header는 useEffect로 로그인 되어있는지 확인하고 로그인 되어있으면 Myprofile 띄우고 안되어있으면 loginMenu 띄워야 함!

export default Header;
