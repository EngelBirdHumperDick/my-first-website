import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Mark Joseph A. Patacsil </span>
            from <span className="purple"> SFC, LU.</span>
            <br />Wala ng intro intro. 🖕
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (COD, COC)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies, Biography Movies, Cybersecurity and Pornhub! (joke! )
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " LAKAD MATATAAAAAG! 🤪 "{" "}
          </p>
          <footer className="blockquote-footer">JOZEL</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
