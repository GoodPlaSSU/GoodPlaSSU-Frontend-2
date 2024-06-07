import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
    return (
        <>
            <img
                className="inline mt-[20%] w-72 "
                src="/logo1.png"
                alt="logo"
            />
            <div className="mt-6 font-medium text-bold">
                {`선행 공유 커뮤니티`}
            </div>
            <div className="mt-1 font-medium text-bold">
                {`GoodPlaSSU에 오신걸 환영합니다!`}
            </div>
            <div className="inline-flex mt-10">
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log("Login Failed");
                    }}
                    useOneTap
                />
            </div>
        </>
    );
};

export default Login;
