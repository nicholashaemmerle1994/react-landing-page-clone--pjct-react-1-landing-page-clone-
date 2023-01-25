/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const wholeFooterSection = css`
  padding: 130px 40px 300px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(180deg, #444, #000);
`;

const imgStyle = css`
  width: 113px;
  height: 28px;
`;

const firstLine = css`
  justify-content: space-between;
  width: 1000px;

  display: flex;
  justify-content: space-between;
`;

const navStyle = css`
  justify-content: space-around;
  display: flex;
  width: 500px;
  height: 28px;
`;
const navStyle2 = css`
  justify-content: right;
  display: flex;
  width: 900px;
  height: 28px;
`;

const navComponents = css`
  padding-right: 40px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
`;

const secondLine = css`
  justify-content: right;
  width: 1000px;
  display: flex;
`;

const thirdLine = css`
  justify-content: left;
  width: 1000px;
  display: flex;
`;
const appleImg = css`
  margin-top: 40px;
  width: 156px;
  height: 60px;
`;

const fourthLine = css`
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

const socialsImgs = css`
  display: flex;
  width: 179px;
  height: 32px;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    // Whole Section
    <div css={wholeFooterSection}>
      {/* div for Content */}
      <div>
        {/* First line of the Footer */}
        <div css={firstLine}>
          <div>
            <img
              css={imgStyle}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00d247034585_Logo%20for%20web.svg"
              alt="HotDrop Logo"
            />
          </div>
          {/* Navstyle Section */}
          <div css={navStyle}>
            <div css={navComponents}>Get in touch</div>
            <div css={navComponents}>About</div>
            <div css={navComponents}>Join out team</div>
            <div css={navComponents}>Press Kit</div>
          </div>
        </div>
        <div css={secondLine}>
          <div css={navStyle2}>
            <div css={navComponents}>Terms of service</div>
            <div css={navComponents}>Privacy Policy</div>
            <div css={navComponents}>DMCA Claim</div>
            <div css={navComponents}>Counter Claim</div>
          </div>
        </div>
        <div css={thirdLine}>
          <div>
            <img
              css={appleImg}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd005ab603454f_apple-badge.svg"
              alt=""
            />
          </div>
        </div>
        <div css={fourthLine}>
          <div>Ⓒ Copyright 2022 ● HotDrop, Inc. ● All rights reserved</div>
          <div css={socialsImgs}>
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00482703454b_linkedin%20-%20icon.svg"
              alt="linkedIn"
            />
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd0053b9034549_instagram%20-%20icon.svg"
              alt="instagram"
            />
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd0059ba03455e_twitter.svg"
              alt="twitter"
            />
            <img
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd004f91034555_tik-tok.svg"
              alt="tiktok"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
