import {useDeno } from "framework/react";
import React from 'react';
import Logo from './loding-logo.tsx';

export default function Home() {
    const version = useDeno(()=>Deno.version.deno);
    return (
        <div>
            <head>
                <title>Aleph 入门到实战</title>
                <link rel="stylesheet" href="~/style/index.css"/>
            </head>
            <p className="logo">
            <Logo size={30}/>
            </p>
            <h1>来自首页的问候</h1>
            <p className="copyinfo">用Aleph构建，Deno 版本{  version }</p>
        </div>
    );
}