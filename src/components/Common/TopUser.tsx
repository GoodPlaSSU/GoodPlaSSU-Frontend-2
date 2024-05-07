import UserProfile from "./UserProfile";

interface UserInfo {
    name: String;
    point: Number;
    profile: String;
}
const example: UserInfo[] = [
    { name: "Minji Kim", point: 243, profile: "" },
    { name: "Minji Kim", point: 243, profile: "" },
    { name: "Minji Kim", point: 243, profile: "" },
    { name: "Minji Kim", point: 243, profile: "" },
];

const TopUser = () => {
    return (
        <div className="w-60 h-80 bg-white border-[1px] rounded-lg">
            <div className="mt-6 mb-3 pl-6 text-sm font-semibold text-primary text-start">
                이 달의 선행왕
            </div>
            <UserProfile />
            <UserProfile />
            <UserProfile />
            <UserProfile />
        </div>
    );
};

export default TopUser;
