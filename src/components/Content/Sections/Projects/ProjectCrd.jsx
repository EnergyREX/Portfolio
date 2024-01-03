

export default function ProjectCrd(props) {
    return (
        <article className="projects__projectcrd">
            <img className="projectcrd__img" src={props.img} alt="Project bgimg" />
            <div className="projectcrd__content">
            <h1 className="projectcrd__title">{props.projectName}</h1>
            <p className="projectcrd__about">{props.children}</p>

            <button className="projectcrd__btn">View More...</button>
            </div>
        </article>
    )
}