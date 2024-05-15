import { useEffect, useRef, useState } from "react";
import GoodPost from "../components/GoodPostList/GoodPost";
import { useInView } from "react-intersection-observer";
import { useQuery } from "@tanstack/react-query";
import { getGoodPostList } from "../api/goodPostList";
import { useNavigate } from "react-router-dom";

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

const GoodPostList = () => {
    const navigate = useNavigate();

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.7,
    });

    let page = useRef(0);

    const { isLoading, data } = useQuery<Data[]>({
        queryKey: ["goodPostList"],
        queryFn: () => {
            return getGoodPostList(1);
        },
    });

    const onPostClick = (id: number) => {
        navigate(`/post/${id}`);
    };

    useEffect(() => {
        if (inView) {
            page.current++;
        }
    }, [inView]);

    return (
        <div>
            {!isLoading &&
                data?.map((e, i) => (
                    <div key={i} onClick={() => onPostClick(e.id)}>
                        <GoodPost
                            name={e.writer_name}
                            profile={e.writer_profile}
                            content={e.content}
                            like={e.like_count}
                            isOn={e.like_on}
                        />
                    </div>
                ))}
            <div ref={ref}></div>
        </div>
    );
};

export default GoodPostList;
