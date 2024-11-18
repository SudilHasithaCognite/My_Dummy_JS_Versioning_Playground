import React from 'react';
import { HeaderFeature } from './HeaderFeature';


export function Header() {
    const featureText = "This is a header feature"
    return (
        <>
        <header>
            Lerna is the original monorepo tool!
        </header>
        <HeaderFeature text={featureText}/>
        </>
    );
}
