import {useDeno, useRouter} from 'framework/react';
import React from 'react';

export default function Query() {
    const router = useRouter();
    const debug = useDeno(() => {
        const q = Object.fromEntries(router.query.entries());
        return JSON.stringify(q, undefined, 2);
    });
    return (
        <div>
            <h1>查询:</h1>
            <h3>{debug}</h3>
        </div>
    );
}
