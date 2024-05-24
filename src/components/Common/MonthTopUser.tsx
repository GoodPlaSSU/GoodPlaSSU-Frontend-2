import { useQuery } from "@tanstack/react-query";
import UserPointProfile from "./UserPointProfile";
import { getMonthTopUser } from "../../api/TopUser";

type TopUserType = {
    month_point: number;
    writer_name: string;
    writer_profile: string;
};

const MonthTopUser = () => {
    const { isLoading, data } = useQuery<TopUserType[]>({
        queryKey: ["monthTopUser"],
        queryFn: () => {
            return getMonthTopUser();
        },
    });
    return (
        <div className="w-60 h-80 mr-7 pb-2 bg-white border-[1px] rounded-lg">
            <div className="mt-6 mb-3 pl-6 text-sm font-semibold text-primary text-start">
                이 달의 선행왕
            </div>
            {data?.map((e, i) => (
                <UserPointProfile
                    key={i}
                    name={e.writer_name}
                    profile={""}
                    point={e.month_point}
                />
            ))}
        </div>
    );
};

export default MonthTopUser;
