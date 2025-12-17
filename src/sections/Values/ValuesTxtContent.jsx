import HighlightParagraph from "@/components/ui/HighlightParagraph.jsx";

export default function ValuesTxtContent() {
    return (

        <div className="grid text-center md:text-start md:grid-cols-2 gap-12 md:gap-52 mb-20">

            <h2 className="text-3xl md:text-5xl font-medium leading-tight font-orbitron ">
                Made for creators <br/>


                who turn ideas into <br/>
                impact
            </h2>

            <HighlightParagraph
                highlight="Bring your ideas to life."
                className="justify-self-center md:justify-self-end">
                Texon powers ambitious teams with bold creativity, fast execution, and unmatched
                quality.
            </HighlightParagraph>
        </div>
    )
}