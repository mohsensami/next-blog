import React from "react";
import { useRouter } from "next/router";

function sample() {
    const router = useRouter();
    return <div>{router.asPath}</div>;
}

export default sample;

sample.getInitalProps = async (context) => {
    const { req, query, res, asPath, pathname } = context;
    if (req) {
        let host = req.headers.host; // will give you localhost:3000
    }
};
