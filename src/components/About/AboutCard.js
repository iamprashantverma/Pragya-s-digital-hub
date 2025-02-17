import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pragya POC-(Training and Placement cell at IGDTUW) </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently pursuing my MCA at Indira Gandhi Delhi Technical University For Women (IGDTUW) and am a Web Development Intern at Unified Mentor.
            <br />
            I have completed my BCA from Dr. Ram Manohar Lohiya Awadh University, and I am passionate about programming, problem-solving, and full stack development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Diary Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Interacting with new people
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pragya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
