import "./ButtonStyle.css"


// REQUIRE => When you use it, add your [ padding, text size ]

export default function Button({children, className = "", ...props}) {
    return (
        <button
            className={`button rounded-full border border-main-text transition  ${className}`}
            {...props}>
            {children}
        </button>
    );
}
