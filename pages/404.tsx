import React  from 'react';
import Head from 'https://deno.land/x/aleph@v0.3.0-alpha.33/framework/react/components/Head.ts';

export default function  E404(){
    return (
        <div>
            <Head>
                <title>我是自定义HEAD</title>
            </Head>
        <h1>404 - 页面找不到</h1>
        </div>
    );
}