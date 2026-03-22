

function About(props) {
    return(
        <aside>
            <img alt="blog logo">{props.img}</img>
            <p> {props.about}</p>
        </aside>
    )
}
export default About;