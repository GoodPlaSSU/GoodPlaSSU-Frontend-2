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

    const { data } = useQuery({
        queryKey: ["goodPostList"],
        queryFn: () => {
            return getGoodPostList(1);
        },
    });

    useEffect(() => {
        if (inView) {
            page.current++;
        }
    }, [inView]);

    return (
        <div className=" h-[calc(100vh-136px)] mb-7 overflow-scroll rounded-lg border-[1px] bg-white">
            {postList.map((e, i) => (
                <div key={i}>
                    <GoodPost />
                </div>
            ))}
            <div ref={ref}></div>
        </div>
    );
};

export default GoodPostList;
