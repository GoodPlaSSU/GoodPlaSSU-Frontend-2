import { useQuery } from "@tanstack/react-query";
import UserPointProfile from "./UserPointProfile";
import { getTotalTopUser } from "../../api/TopUser";

type TopUserType = {
    total_point: number,
    writer_name: string,
    writer_profile: string
}

function TotalTopUser() {

    const {isLoading, data} = useQuery<TopUserType[]>({
        queryKey: ['totalTopUser'],
        queryFn: () =>  {return getTotalTopUser();}
    })
    
    return (
        <div className="w-60 h-80 mr-7 pb-2 bg-white border-[1px] rounded-lg">
            <div className="mt-6 mb-3 pl-6 text-sm font-semibold text-primary text-start">
                전체 선행왕
            </div>
            {data?.map((e, i) => (
                <UserPointProfile key={i} name={e.writer_name} profile={''} point={e.total_point} />
            ))}
        </div>
    );
}

export default TotalTopUser;
