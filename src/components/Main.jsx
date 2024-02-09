import React from "react";
import styled from "styled-components";
import bg from "./Materials/bg.png"
import {ReactTyped} from "react-typed"

export default function Main() {
  return (
    <>
      <Container>
        <main>
          <section className="firstsection">
            <div className="leftsection">
              Hi! Myself <span className="purple"> Riya Maheshwari </span>
              <div>and I am a passionate</div>
              <ReactTyped strings={["Competetive Programmer.", "Web Developer."]} typeSpeed={50} />
            </div>
            <div className="rightsection">
              <img src={bg} alt="" />
            </div>
          </section>
          <hr />

          <section className="secondsection">
            <h1>Education</h1>
            <div className="outerbox">
              <div className="box">
                <div className="vertical">
                  <div className="verticalheading">Class 10</div>
                  <div className="verticaltext">
                    <ul>
                      <li>Lord Mahavira Academy</li>
                      <li>Saharanpur, UP ,India</li>
                      <li>Percentage: 93.00%</li>
                      <li>March 2019</li>
                    </ul>
                  </div>
                </div>
                <div className="vertical">
                  <div className="verticalheading">Class 12</div>
                  <div className="verticaltext">
                    <ul>
                      <li>Khalsa Public School</li>
                      <li>Saharanpur, UP ,India</li>
                      <li>Percentage: 90.00%</li>
                      <li>March 2021</li>
                    </ul>
                  </div>
                </div>
                <div className="vertical">
                  <div className="verticalheading">B-Tech</div>
                  <div className="verticaltext">
                    <ul>
                      <li>Indian Institute of Technology (ISM) Dhanbad</li>
                      <li>Bachelor of Technology- Electrical Engineering</li>
                      <li>CGPA: 9.12</li>
                      <li>December 2021- Present</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h1>Skills</h1>
            <div className="outerbox">
              <div className="box">
                <div className="vertical">
                  <div className="verticalheading">Core Skills</div>
                  <div className="verticaltext">
                    <ul>
                      <li>C, C++</li>
                      <li>Data Structures and Algorithms</li>
                      <li>OOPS</li>
                    </ul>
                  </div>
                </div>
                <div className="vertical">
                  <div className="verticalheading"> Full Stack Web Developer</div>
                  <div className="verticaltext">
                    <ul>
                      <li> HTML, CSS, Javascript</li>
                      <li>ReactJs, NodeJs, ExpressJs</li>
                      <li>Mongoose, MongoDB</li>
                    </ul>
                  </div>
                </div>
                <div className="vertical">
                  <div className="verticalheading">Learning Skills</div>
                  <div className="verticaltext">
                    <li>Trading (Stock Market)</li>
                    <li>Poster Making(Canva)</li>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}
const Container = styled.div`
  .firstsection {
    display: flex;
    justify-content: space-around;
    margin: 70px;
  }

  .firstsection > div {
    width: 40%;
  }

  .leftsection {
    font-size: 2.9rem;
    text-align: center;
    margin-top: 50px;
  }

  .rightsection {
    width: 40%;
  }

  .rightsection img {
    /* width:90%;  */
    width: 500px;
    height: 350px;
  }

  main hr {
    border: 0;
    background-color: rgb(83, 27, 97);
    height: 2px;
    margin: 40px 50px;
  }

  .purple {
    color: rgb(25, 7, 44);
  }

  #element {
    color: rgb(25, 7, 44);
  }
  .secondsection .box {
    display: flex;
    background-color: antiquewhite;
    margin: 0 50px;
    height: 2px;
  }

  .box .vertical {
    background-color: antiquewhite;
    height: 80px;
    width: 2px;
    margin: 0 200px;
  }
  .secondsection h1 {
    font-size: 2rem;
    margin: 30px 50px;
  }
  .outerbox {
    height: 200px;
    margin: 0 50px;
  }
  .verticalheading {
    position: relative;
    top: 85px;
    width: 220px;
    font-size: 1.1rem;
    color: rgb(25, 7, 44);
    font-size: 20px;
  }
  .verticaltext {
    position: relative;
    top: 90px;
    width: 220px;
  }
`;
