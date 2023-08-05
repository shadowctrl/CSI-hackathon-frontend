import "./schedule.css";
import React from "react";

const schedule = () => {
  return (
    <React.Fragment>
      <div id="schedule" className="parent-schedule">
        <div className="schedule-title">
          <img src="/images/logo3.png" alt="" />
          Schedule
        </div>
        <div className="timeline">
          <div className="container ">
            <h2 className="date">Aug 5</h2>
            <h2 className="container-title">Registration opens</h2>
            <p className="container-description">
              Registration is open for tech enthusiasts, developers, and problem
              solvers from all backgrounds. Join us for an exhilarating 24 hours
              of coding, collaboration, and competition as we tackle real-world
              challenges and develop cutting-edge solutions
            </p>
            <span className="circle"></span>
          </div>
          <div className="container ">
            <h2 className="container-title">Abstract Submission</h2>
            <h1 className="date"> Aug 5 - Aug 23</h1>
            <p className="container-description">
              Submit your abstracts and be a part of the forefront of
              innovation! We invite you to share your groundbreaking ideas and
              research at our esteemed hackathon event. This is your opportunity
              to present your unique insights and solutions 🚀👩‍💻
            </p>
            <span className="circle"></span>
          </div>
          <div className="container ">
            <h2 className="container-title">Finalists Annoncements</h2>
            <h1 className="date"> Aug 23 - Aug 28</h1>
            <p className="container-description">
              Step into the limelight – the moment we've all been waiting for is
              here! We're thrilled to announce the finalists of our highly
              competitive hackathon event. After meticulous evaluation and
              deliberation, we've handpicked the most promising and innovative
              teams to move forward to the final round
            </p>
            <span className="circle"></span>
          </div>
          <div className="container ">
            <h2 className="container-title">Registration Closes</h2>
            <h1 className="date">Aug 28 - Sep 3</h1>
            <p className="container-description">
              Last call for registration! Time is running out to be a part of
              our extraordinary hackathon event. Don't miss this incredible
              opportunity to join a community of tech enthusiasts, developers,
              and innovators from around the world. Registration will close
              soon, so act fast and secure your spot
            </p>
            <span className="circle"></span>
          </div>
          <div className="container ">
            <h2 className="container-title">Hackathon Finale</h2> <br />
            <h1 className="date">Sep 8 - Sep 9</h1>
            <p className="container-description">
              Get ready for the moment of triumph – the Hackathon Finale is just
              around the corner! After an intense and exhilarating journey,
              we've arrived at the grand finale, where the most ingenious minds
              will showcase their remarkable solutions.
            </p>
            <span className="circle"></span>
          </div>
          <div className="container ">
            <h2 className="container-title">Award Ceremony</h2>
            <h1 className="date">Sep 9</h1>
            <p className="container-description">
              The judges deliberate, and winners are announced in various
              categories, celebrating outstanding projects, creativity, and
              teamwork. The successful conclusion of the hackathon is
              commemorated with an awards ceremony and well-deserved
              celebrations.
            </p>
            <span className="circle"></span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;
