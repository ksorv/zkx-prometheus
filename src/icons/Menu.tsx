import { IconProps } from "../typings/icon";

const MenuIcon = ({ size = 24 }: IconProps) => {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Menu">
            <path id="Icon" d="M4 6H20M4 12H20M4 18H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>

}

export default MenuIcon;