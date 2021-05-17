import {useRouter} from 'framework/react';
import React from 'react';

export default function Query(){
    const router = useRouter();
    const color = router.params.name || 'white';
    const textColor = router.query.get('text')||'black';
    return(
        <div>
            <head>
                <title>颜色：{color}</title>
            </head>
            <div>
                <h1>背景颜色:{color}，文字颜色:{textColor}</h1>
            </div>
        </div>
    );
}