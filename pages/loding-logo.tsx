import React from 'react';
import {dynamic, Fallback} from 'framework/react';

const RawLogo = dynamic(() => import('~/components/logo.tsx'))
export default function Logo() {
    return (
        <Fallback to={<p>loading...</p>}>
            <RawLogo />
        </Fallback>
    )
}
