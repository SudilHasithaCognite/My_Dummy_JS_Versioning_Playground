import React from 'react';
import { FooterFeature } from './FooterFeature';

export function Footer() {
    const featureText = "New feature added for rc"
    return (
        <>
            <footer>
                Feature for footer is added by v2
            </footer>
            <FooterFeature text={featureText}/>
        </>
    );
}
