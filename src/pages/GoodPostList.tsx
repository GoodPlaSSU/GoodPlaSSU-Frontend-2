import { useEffect, useRef, useState } from "react";
import GoodPost from "../components/GoodPostList/GoodPost";
import { useInView } from "react-intersection-observer";
import { useQuery } from "@tanstack/react-query";
import { getGoodPostList } from "../api/goodPostList";

const GoodPostList = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.7,
    });

    const [postList, setPostList] = useState([]);
    let page = useRef(0);

    const { isLoading, data } = useQuery<Data[]>({
        queryKey: ["goodPostList"],
        queryFn: () => {
            return getGoodPostList(1);
        },
    });

    type Data = {
        id: number;
        writer_profile: string;
        writer_name: string;
        content: string;
        thumbnail: string;
        like_on: boolean;
        like_count: number;
        updated_date: string;
    };

    useEffect(() => {
        if (inView) {
            page.current++;
        }
    }, [inView]);

    return (
        <div className=" h-[calc(100vh-136px)] mb-7 overflow-scroll rounded-lg border-[1px] bg-white">
            {!isLoading &&
                data?.map((e, i) => (
                    <div key={i}>
                        <GoodPost
                            name={e.writer_name}
                            profile={e.writer_profile}
                            content={e.content}
                            like={e.like_count}
                        />
                    </div>
                ))}
            <div ref={ref}></div>
        </div>
    );
};

export default GoodPostList;
