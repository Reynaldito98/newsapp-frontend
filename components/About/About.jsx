import './About.css';
import author from "../../images/rey.jpeg";

function About() {
    return (
        <section className="about">
            <img src={author} alt="Author: Reynaldo Perez Pauli" title="Reynaldo Perez Pauli" className="about__image"/>

            <div className="about__container">
                <h2 className="about__title">About the author:</h2>
                <p className="about__description">Born in Santiago de Cuba, Cuba in 1998. Reynaldo Perez Pauli came into de United States with just one idea in mind, and it's to become a professional Software Engineer who could contribute to the development of the industry with effort and dedication.
                </p>
                <p className="about__description">
                Coming from studying Architecture, nothing can compare to the experience of studying once again something new and this has been an exciting journey so far. I hope you enjoy this site as it is the reflection of what I have been able to learn throughout this course.
                </p>
            </div>
        </section>
    )
}

export default About;