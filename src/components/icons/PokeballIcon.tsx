import type { SVGProps } from "react";

const PokeballIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        fill="currentColor"
        width={24}
        height={24}
        {...props}
    >
        <g>
            <circle cx={8} cy={8} r={3} />
            <path d="M23.866.16a.499.499 0 0 0-.58-.112L11.845 5.68a.5.5 0 0 0-.211.645A4.004 4.004 0 0 1 8 12a4.001 4.001 0 0 1-3.34-1.8.5.5 0 0 0-.66-.16l-2.621 1.455a.499.499 0 0 0-.183.7A7.953 7.953 0 0 0 8 16l.108-.003 1.906 7.624a.501.501 0 0 0 .921.125l13-23a.5.5 0 0 0-.069-.586zM4.03 8.49A4.004 4.004 0 0 1 8 4c.919 0 1.818.32 2.531.902a.5.5 0 0 0 .558.051l2.736-1.51a.5.5 0 0 0 .132-.771A8.011 8.011 0 0 0 8 0C3.589 0 0 3.59 0 8a8 8 0 0 0 .313 2.2.5.5 0 0 0 .722.3l2.74-1.512a.5.5 0 0 0 .255-.498z" />
        </g>
    </svg>
)
export default PokeballIcon;
