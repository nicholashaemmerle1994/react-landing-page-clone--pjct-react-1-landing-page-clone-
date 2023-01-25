/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const featureSectionHeading = css`
  text-align: center;
  font-size: 32px;
  line-height: 45px;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  padding: 40px 0px;
`;

const testiImgStyles = css`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin: 0px 15px;
`;
const testiCards = css`
  box-shadow: 0 0 20px white;
  justify-content: right;
  align-items: center;
  color: black;
  width: 350px;
  height: 90px;
  display: flex;
  background-color: white;
  border-radius: 50px;
`;

const testimonaialsSectionStyles = css`
  display: flex;
  justify-content: space-around;
`;

const testimonaialsSectionStyles2 = css`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
`;

export default function Testimonaials() {
  return (
    <div>
      <h2 css={featureSectionHeading}>Testimonials</h2>
      <div css={testimonaialsSectionStyles}>
        <div css={testiCards}>
          <img
            css={testiImgStyles}
            src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd0029bd03459f_17.jpg"
            alt="Testi 1"
          />
          <p>"If you are music-junkie, you need HotDrop" - Arianna</p>
        </div>
        <div css={testiCards}>
          <img
            css={testiImgStyles}
            src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00863903459e_15.jpg"
            alt="Testi 2"
          />
          <p>"I've waited years for an app like HotDrop" - Kristine</p>
        </div>
        <div css={testiCards}>
          <img
            css={testiImgStyles}
            src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd003f8903458d_8.jpg"
            alt=""
          />
          <p>"HotDrop and Spotify is the ultimate combo" - Aaron</p>
        </div>
      </div>
      <div css={testimonaialsSectionStyles2}>
        <div css={testiCards}>
          <img
            css={testiImgStyles}
            src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd0026e9034587_7.jpg"
            alt="Testi 1"
          />
          <p>“HotDrop is the ONLY way I listen to new music.” – Rachel</p>
        </div>
        <div css={testiCards}>
          <img
            css={testiImgStyles}
            src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00e10a03458b_3.jpg"
            alt="Testi 2"
          />
          <p>“Easy to get lost and pass time like TikTok.” – Mike</p>
        </div>
        <div css={testiCards}>
          <img
            css={testiImgStyles}
            src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00e377034599_2.jpg"
            alt=""
          />
          <p>
            “I don't leave my musical comfort zone until I go on HotDrop.” –
            Lauren
          </p>
        </div>
      </div>
    </div>
  );
}
