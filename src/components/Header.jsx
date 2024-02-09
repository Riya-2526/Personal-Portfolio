import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <Container>
        <header>
          <nav>
            <div class="left">Riya's Portfolio</div>
            <div class="right">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/"> About</a>
                </li>
                <li>
                  <a href="/">Project</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/"> Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </Container>
    </>
  );
}
const Container = styled.div`
  .left {
    font-size: 30px;
    padding-left: 50px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: rgb(83, 27, 97);
    padding: 0 50px;
    margin-top: 20px;
  }
  nav ul {
    display: flex;
    justify-content: center;
  }
  nav ul li {
    list-style: none;
    margin: 0 20px;
    font-size: 15px;
  }
  nav ul li a {
    text-decoration: none;
    color: rgb(234, 197, 233);
  }
  nav ul li a:hover {
    color: rgb(253, 252, 253);
    font-size: 1.05rem;
  }
`;
