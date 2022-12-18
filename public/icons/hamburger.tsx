import {FC, SVGProps} from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

const HamburgerIcon: FC<IconProps> = ({size, ...props}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 34 34"
            width={!!size ? size : 34}
            height={!!size ? size : 34}
            stroke='currentColor'
            {...props}
        >
        <path d="M28.3334 25.5L14.1667 25.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28.3334 17L5.66669 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28.3333 8.5L19.8333 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default HamburgerIcon;









// <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M28.3334 25.5L14.1667 25.5" stroke="#3842B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M28.3334 17L5.66669 17" stroke="#3842B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M28.3333 8.5L19.8333 8.5" stroke="#3842B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
