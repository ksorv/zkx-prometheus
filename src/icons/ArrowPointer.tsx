import { IconProps } from "../typings/icon";

const ArrowPointerIcon = ({ size = 24, onClick }: IconProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} color="inherit" width={size} height={size} viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_3_852)">
            <path d="M7.49998 4.16667V5.83333H12.9916L3.33331 15.4917L4.50831 16.6667L14.1666 7.00833V12.5H15.8333V4.16667H7.49998Z" fill="#828282" />
        </g>
        <defs>
            <clipPath id="clip0_3_852">
                <rect width="20" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>
}

export default ArrowPointerIcon;