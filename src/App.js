/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import FirstComponent from './FirstComponent';

const companyLogoSectionStyles = css`
  width: 1000px;
  justify-content: space-around;
  display: flex;
  margin-left: 200px;
`;
const compnyLogoImg = css`
  width: 300px;
`;
const h2Styles = css`
  text-align: center;
  font-size: 40px;
  margin: 50px 0px;
`;

function App() {
  return (
    <>
      {/* First "Component" */}
      <div>
        <FirstComponent />
        {/* Second Component */}
        <div>
          <h1 css={h2Styles}>Featured in</h1>
          <div css={companyLogoSectionStyles}>
            <img
              css={compnyLogoImg}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce3e8200701d125e27_F1.png"
              alt="wsj logo"
            />
            <img
              css={compnyLogoImg}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dcde7aba3a29be95809_F2.png"
              alt="musically logo"
            />
            <img
              css={compnyLogoImg}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce67761f561f271dbb_F3.png"
              alt="hypebot logo"
            />
            <img
              css={compnyLogoImg}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce1925274830086792_F4.png"
              alt="Bostinno logo"
            />
          </div>
        </div>
        <div>
          <h1 css={h2Styles}>A proud portfolio company of</h1>
          <div css={companyLogoSectionStyles}>
            <img
              css={compnyLogoImg}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/632149ed41e0510de6e577ad_Techstars_Blinking.png"
              alt="techstars logo"
            />
            <img
              css={compnyLogoImg}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/632149ed41e05152cde577b2_Screen%20Shot%202022-09-13%20at%206.34.19%20PM.png"
              alt="ventures logo"
            />
          </div>
        </div>
        <main>MyMain</main>
        <footer>MyFooter</footer>
      </div>
    </>
  );
}

export default App;
