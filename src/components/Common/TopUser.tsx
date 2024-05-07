import UserPointProfile, { UserPointInfo } from "./UserPointProfile";

const example: UserPointInfo[] = [
    { name: "Minji Kim", point: 1231, profile: "" },
    { name: "Hyein Lee", point: 456, profile: "" },
    { name: "Haerin Kang", point: 234, profile: "" },
    { name: "Daniel", point: 123, profile: "" },
];

const TopUser = () => {
    return (
        <div className="w-60 h-80 bg-white border-[1px] rounded-lg">
            <div className="mt-6 mb-3 pl-6 text-sm font-semibold text-primary text-start">
                이 달의 선행왕
            </div>
            {example.map((userinfo) => (
                <UserPointProfile userinfo={userinfo} />
            ))}
        </div>
    );
};

export default TopUser;
