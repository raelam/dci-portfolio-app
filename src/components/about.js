import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default class About extends Component {
  render() {
    return (
      <Row className="pt-5" id="about">
        <Col sm={8}>
          <h1>Marketing and Web Services</h1>
          <h4>About RCL Design</h4>
          <p>
            I am an experienced and organized product manager with a mind for
            data and an eye for detail. After my position at Ace Mart Restaurant
            Supply was terminated due to the COVID-19 crisis, I started looking
            for a role which better aligns with my values and goals. Primarily,
            to lend my skill in STEM education, communication, team dynamics,
            and product management to an established development team.
          </p>

          <p>
            My role with Quest Learning & Assessment was more than that of the
            typical ‘business analyst’, in reality I spent much of my 3 years as
            the product owner of Quest. As a self-funded unit within the
            University of Texas at Austin, the organization provides online
            classroom tools for high school and college-level courses in STEM.
            My position required creative and strategic outreach to find new
            partnerships and to engage with the existing stakeholders in the
            educational platform. Managing the relationship and needs of up to
            80 different courses across 5 different departments also required
            patience and keen observational skills. A crowning achievement was
            bringing value to the undergraduate organic chemistry lab courses by
            developing a set of online modules focused on lab safety and prep
            materials specific to each week’s activities. The size of the course
            brought in roughly $30,000 in additional subscription revenue
            annually. This project was born out of need finding and active
            listening to both the instructor and teaching assistants to develop
            a unique course solution. This role was pivotal in my career
            evolution and I was fortunate to be able to take time to reflect on
            my next career step which led me to the Digital Creative Institute
            apprenticeship program for digital marketers.
          </p>

          <p>
            DCI has provided me an opportunity to consolidate my work experience
            through professional coaching and instruction. While the program
            focuses on digital marketing skills, I have found broad value in
            each of the module topics, from becoming a certified Scrum Master to
            learning to use systems such as Tableau and Hubspot. The module on
            Scrum was one of the things that attracted me to the DCI program the
            most. We spent a month studying and practicing Agile Methodologies
            as a cohort with an experienced Agile coach as our mentor. I was
            particularly impressed by the focus on the fundamentals as we
            prepared for the PSM-I exam, and it reinforced my interest in Agile.
            Additionally, collaborating with other apprentices on projects has
            provided many opportunities to share skills from our disparate
            backgrounds and learn from each other.
          </p>

          <p>
            I took the role with Ace Mart to align with the DCI program and to
            gain experience in a marketing role with greater responsibilities.
            My time on their team gave me an opportunity to experience marketing
            in the e-commerce industry. Balancing several time-sensitive
            projects, I worked to implement a Kanban board to limit
            work-in-progress and successfully gained buy-in for time-boxing in
            weekly team meetings. I also gained experience demonstrating value
            to senior management during key training sessions, using the
            opportunities to further conversation around brand marketing and
            product positioning.
          </p>
          <p style={{ 'text-align': 'center' }}>
            <Button
              href="https://www.linkedin.com/in/rachel-lammer"
              variant="outline-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my resume and contact me on LinkedIn
            </Button>
          </p>
        </Col>
        <Col sm={4}>
          <div className="aboutImgDiv">
            <Image
              className="aboutImg"
              id="about-img"
              src="images/headshot.jpg"
              alt="Headshot"
              roundedCircle
              fluid
            />
          </div>
          <h3>Skills</h3>
          <ul>
            <li>Data analysis</li>
            <li>Clear, articulate communication</li>
            <li>User-centric, data-driven design</li>
            <li>Connecting dots, out-of-the-box thinking</li>
            <li>Identifying needs and collaborating on solutions</li>
            <li>Influencing without authority</li>
            <li>Active listening</li>
            <li>Learner mindset</li>
          </ul>
          <h3>Interests</h3>
          <ul>
            <li>
              Collaborating with a cross-functional, diverse team with ambitious
              goals
            </li>
            <li>
              Identifying needs/pain-points and advocating on stakeholders
              behalf
            </li>
            <li>Finding solutions to complex problems</li>
            <li>Working on big-picture ideas</li>
            <li>Learning things from other people</li>
            <li>
              Listening to people talk about their passions, especially related
              to scientific advancement
            </li>
          </ul>
        </Col>
      </Row>
    );
  }
}
