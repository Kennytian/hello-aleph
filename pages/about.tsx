import {useDeno, useRouter } from "framework/react";
import React from 'react';

export default function About() {
    const router = useRouter();
    const version = useDeno(()=>Deno.version.deno);
    const textColor = router.query.get('text') || 'black';
    return (
        <div className="page">
            <head>
                <link rel="stylesheet" href="~/style/about.css"/>
                <title>关于</title>
            </head>
            <h1>文字颜色-{textColor}</h1>
            <h2>Deno 版本 {version}</h2>
        </div>
    );
}