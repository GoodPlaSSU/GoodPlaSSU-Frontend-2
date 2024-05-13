import { useEffect, useRef, useState } from "react";
import GoodPost from "../components/GoodPostList/GoodPost";
import { useInView } from "react-intersection-observer";

const GoodPostList = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.7,
    });

    const [postList, setPostList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    let page = useRef(0);

    useEffect(() => {
        if (inView) {
            page.current++;
            setPostList([
                ...postList,
                ...[
                    1 + 10 * page.current,
                    2 + 10 * page.current,
                    3 + 10 * page.current,
                    4 + 10 * page.current,
                    5 + 10 * page.current,
                    6 + 10 * page.current,
                    7 + 10 * page.current,
                    8 + 10 * page.current,
                    9 + 10 * page.current,
                    10 + 10 * page.current,
                ],
            ]);
            console.log(page.current);
        }
    }, [inView]);

    return (
        <div className=" h-[calc(100vh-136px)] mb-7 overflow-scroll rounded-lg border-[1px] bg-white">
            {postList.map((e, i) => (
                <div key={i}>
                    <GoodPost />
                    <div>{e}</div>
                </div>
            ))}
            <div ref={ref}></div>
        </div>
    );
};

export default GoodPostList;
