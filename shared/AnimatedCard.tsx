import Link from "next/link";
import React from "react";
import styled from "styled-components";

const AnimatedCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="background"></div>
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="logo-svg"
            fill="currentColor"
          >
            <path d="M48 12H16c-4.4 0-8 3.6-8 8v16c0 8.8 7.2 16 16 16h8v8h-4c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2h-4v-8h8c8.8 0 16-7.2 16-16v-8c0-4.4-3.6-8-8-8zm0 24c0 6.6-5.4 12-12 12H28c-6.6 0-12-5.4-12-12V20h32c4.4 0 8 3.6 8 8v8zm-8-16H24c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2z" />
            <path d="M28 6c0 3.3-4 4.7-4 8 0 1.1-.9 2-2 2s-2-.9-2-2c0-5.3 6-6.7 6-10 0-1.1.9-2 2-2s2 .9 2 2zm12 0c0 3.3-4 4.7-4 8 0 1.1-.9 2-2 2s-2-.9-2-2c0-5.3 6-6.7 6-10 0-1.1.9-2 2-2s2 .9 2 2z" />
          </svg>
        </div>
        <Link href={"https://www.instagram.com/_ramesh_rajendran_/"}>
          <div className="box box1">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8s114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.6-74.7-74.7s33.6-74.7 74.7-74.7 74.7 33.6 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-93C384.7 38.1 353.3 29.9 318 28.2c-35.4-1.7-118.4-1.7-153.8 0-35.3 1.7-66.7 9.9-93 36.2S29.9 128.7 28.2 164c-1.7 35.4-1.7 118.4 0 153.8 1.7 35.3 9.9 66.7 36.2 93s57.7 34.5 93 36.2c35.4 1.7 118.4 1.7 153.8 0 35.3-1.7 66.7-9.9 93-36.2s34.5-57.7 36.2-93c1.7-35.4 1.7-118.4 0-153.8zm-48.2 194.4c-7.8 19.6-22.9 34.7-42.5 42.5-29.5 11.7-99.5 9-132.2 9s-102.7 2.6-132.2-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.5-9-99.5-9-132.2s-2.6-102.7 9-132.2c7.8-19.6 22.9-34.7 42.5-42.5 29.5-11.7 99.5-9 132.2-9s102.7-2.6 132.2 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.5 9 99.5 9 132.2s2.6 102.7-9 132.2z" />
              </svg>
            </span>
          </div>
        </Link>

        <Link href={"https://www.linkedin.com/in/ramesh-pr/"}>
          <div className="box box2">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338.3a53.59 53.59 0 1 1 53.61-53.59 53.56 53.56 0 0 1-53.6 53.59zm384.36 338.3h-92.68V302.4c0-34.7-12.4-58.3-43.4-58.3-23.7 0-37.8 16-44 31.4-2.3 5.6-2.9 13.4-2.9 21.2v151.3h-92.68s1.2-245.7 0-271h92.68v38.4c12.3-19 34.4-46.1 83.6-46.1 61 0 106.8 39.9 106.8 125.5z" />
              </svg>
            </span>
          </div>
        </Link>

        <a href={"tel:+917025107494"}>
          <div className="box box3">
            <span className="icon">
              <svg className="svg" viewBox="0 0 16 16">
                {" "}
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />{" "}
              </svg>
            </span>
          </div>
        </a>

        <div className="box box4" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    margin-top: 30px;
    width: 300px;
    height: 300px;
    background: lightgrey;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 1s ease-in-out;
  }

  .background {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 100% 107%,
      #ff89cc 0%,
      #9cb8ec 30%,
      #00ffee 60%,
      #62c2fe 100%
    );
  }

  .logo {
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    transition: all 0.6s ease-in-out;
  }

  .logo .logo-svg {
    fill: white;
    width: 30px;
    height: 30px;
  }

  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  .icon .svg {
    fill: rgba(255, 255, 255, 0.797);
    width: 100%;
    transition: all 0.5s ease-in-out;
  }

  .box {
    position: absolute;
    padding: 10px;
    text-align: right;
    background: rgba(255, 255, 255, 0.389);
    border-top: 2px solid rgb(255, 255, 255);
    border-right: 1px solid white;
    border-radius: 10% 13% 42% 0%/10% 12% 75% 0%;
    box-shadow: rgba(100, 100, 111, 0.364) -7px 7px 29px 0px;
    transform-origin: bottom left;
    transition: all 1s ease-in-out;
  }

  .box::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .box:hover .svg {
    fill: white;
  }

  .box1 {
    width: 70%;
    height: 70%;
    bottom: -70%;
    left: -70%;
  }

  .box1::before {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #ff53d4 60%,
      #62c2fe 90%
    );
  }

  .box1:hover::before {
    opacity: 1;
  }

  .box1:hover .icon .svg {
    filter: drop-shadow(0 0 5px white);
  }

  .box2 {
    width: 50%;
    height: 50%;
    bottom: -50%;
    left: -50%;
    transition-delay: 0.2s;
  }

  .box2::before {
    background: radial-gradient(circle at 30% 107%, #91e9ff 0%, #00acee 90%);
  }

  .box2:hover::before {
    opacity: 1;
  }

  .box2:hover .icon .svg {
    filter: drop-shadow(0 0 5px white);
  }

  .box3 {
    width: 30%;
    height: 30%;
    bottom: -30%;
    left: -30%;
    transition-delay: 0.4s;
  }

  .box3::before {
    background: radial-gradient(circle at 30% 107%, #00ff6a 0%, #008000 90%);
  }

  .box3:hover::before {
    opacity: 1;
  }

  .box3:hover .icon .svg {
    filter: drop-shadow(0 0 8px #00ff6a);
  }

  .box4 {
    width: 10%;
    height: 10%;
    bottom: -10%;
    left: -10%;
    transition-delay: 0.6s;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .card:hover .box {
    bottom: -1px;
    left: -1px;
  }

  .card:hover .logo {
    transform: translate(0, 0);
    bottom: 20px;
    right: 20px;
  }
`;

export default AnimatedCard;
