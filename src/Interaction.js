/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const h4Style = css`
  color: rgb(255, 255, 255, 0.8);
  font-size: 18px;
  margin: 40px 0 0 60px;
`;

const micImageStyle = css`
  width: 450px;
  height: 700px;
`;

const interactionSection = css`
  margin: 400px 0px 100px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-items: stretch;
`;

const interactionText = css`
  border-radius: 30px 0px 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  background-color: #e63963;
  width: 40%;
  height: 700px;
`;
const h2Style = css`
  margin: 40px 0 0 60px;
  font-size: 40px;
  line-height: 50px;
  font-family: 'Roboto', sans-serif;
`;

const buttonBox = css`
  position: relative;

  padding: 30px 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`;
const buttonDark = css`
  background-color: black;
  color: white;
  margin: 40px 0px 50px -40px;
  border-radius: 30px;
  border: 0;
  height: 60px;
  width: 300px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`;

const buttonLight = css`
  background-color: white;
  color: black;
  border-radius: 30px;
  border: 0;
  height: 60px;
  width: 300px;
  font-size: 18px;
  margin-left: -40px;
  font-family: 'Roboto', sans-serif;
`;

export default function Interaction() {
  return (
    <div css={interactionSection}>
      <div css={interactionText}>
        <h4 css={h4Style}>JOIN THE MOVEMENT</h4>
        <h2 css={h2Style}>
          Music for superfans. <br /> <br />
          Join the HotDrop <br />
          movement. <br />
        </h2>
        <div css={buttonBox}>
          <button css={buttonDark}>PROMOTE MUSIC</button>
          <button css={buttonLight}>DISCOVER MUSIC</button>
        </div>
      </div>
      <img
        css={micImageStyle}
        src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00f21403456e_microphone.jpg"
        alt="microphone"
      />
    </div>
  );
}
