import {AnchorHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import { isDev } from '~/utils/helpers';

export type UiLinkProps = NextLinkProps &
    DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    >;

const UiLink: FC<UiLinkProps> = ({
    href,
    className,
    style,
    children,
    ...props
}) => {
    return (
        <NextLink href={href}>
            <a className={className} style={style} {...props}>
                {children}
            </a>
        </NextLink>
    );
};

if (isDev) {
    UiLink.displayName = 'UiLink';
}

export default UiLink;
