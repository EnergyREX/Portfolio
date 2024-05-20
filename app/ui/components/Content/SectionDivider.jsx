export default function SectionDivider() {
    return (
        <div className="content__sectiondivider">
            <Circle /> <Circle /> <Line />
        </div>
    )
}

function Circle() {
    return <div className="sectiondivider__circle"></div>
}

function Line() {
    return <div className="sectiondivider__line"></div>
}