import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';
import type { Props } from '@theme/Footer/Links/Simple';

function Separator() {
    return <span className='footer__link-separator'>·</span>;
}

function SimpleLinkItem({ item }: { item: Props['links'][number] }) {
    return item.html ? (
        <span
            className='footer__link-item'
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            // biome-ignore lint/security/noDangerouslySetInnerHtml: from swizzled docusaurus component
            dangerouslySetInnerHTML={{ __html: item.html }}
        />
    ) : (
        <LinkItem item={item} />
    );
}

export default function FooterLinksSimple({ links }: Props): JSX.Element {
    return (
        <div className='footer__links text--center'>
            <div className='footer__links'>
                {links.map((item, i) => (
                    <React.Fragment key={i}>
                        <SimpleLinkItem item={item} />
                        {links.length !== i + 1 && <Separator />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
