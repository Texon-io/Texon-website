import {twMerge} from "tailwind-merge";

// children => for the content
// className => for the custom class
// highlight => for the highlighted sentence

export default function HighlightParagraph({
                                               highlight,
                                               className = "",
                                               children
                                           }) {
    return (
        <p className={twMerge(
            "text-gray-400  max-w-sm text-lg/8 md:text-xl/10",
            className,)}>
            {children} <span className="text-main-text font-medium">{highlight}</span>
        </p>
    );
}
