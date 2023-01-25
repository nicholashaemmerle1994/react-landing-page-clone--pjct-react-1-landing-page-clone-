/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const companyLogoSectionStyles = css`
  justify-content: space-around;
  display: flex;
`;
const compnyLogoImg = css`
  width: 300px;
  margin: 0px 100px;
  border-radius: 10px;
`;

const compnyLogoImg2 = css`
  width: 300px;
  margin: 0px 20px;
`;
const h2Styles = css`
  text-align: center;
  font-size: 40px;
  margin: 50px 0px;
  font-family: 'Roboto', sans-serif;
`;

const appFeatureSection = css`
  display: flex;
  justify-content: center;
  margin: 200px;
`;
const imgStyles = css`
  width: 350px;
  height: 700px;
`;
const imgStyles2 = css`
  width: 400px;
  height: 800px;
`;

const imgStyles3 = css`
  width: 600px;
  height: 600px;
`;

const featureSectionHeading = css`
  font-size: 40px;
  line-height: 45px;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  margin: 0px;
`;
const featureTextBox = css`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  font-size: 25px;
`;

const featureTextBox2 = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  text-align: right;
  font-size: 25px;
  margin-left: 100px;
`;

const anchorStyle = css`
  text-decoration: none;
  color: #e63963;
`;

const featuredSection = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const discriptionText = css`
  margin-right: 100px;
`;

export default function FeaturedComponent() {
  return (
    <>
      <div>
        <h1 css={h2Styles}>Featured in</h1>
        <div css={featuredSection}>
          <div css={companyLogoSectionStyles}>
            <img
              css={compnyLogoImg2}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce3e8200701d125e27_F1.png"
              alt="wsj logo"
            />
            <img
              css={compnyLogoImg2}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dcde7aba3a29be95809_F2.png"
              alt="musically logo"
            />
            <img
              css={compnyLogoImg2}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce67761f561f271dbb_F3.png"
              alt="hypebot logo"
            />
            <img
              css={compnyLogoImg2}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63980dce1925274830086792_F4.png"
              alt="Bostinno logo"
            />
          </div>
        </div>
        <h1 css={h2Styles}>A proud portfolio company of</h1>
        <div css={featuredSection}>
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
      </div>
      <div css={appFeatureSection}>
        <div css={featureTextBox}>
          <h3 css={featureSectionHeading}>
            Connect with new <br />
            artists & support <br />
            their journey.
          </h3>
          <p css={discriptionText}>
            90% of artists are invisible. We put artist stories in <br />
            the spotlight.
          </p>
        </div>
        <div>
          <img
            css={imgStyles}
            src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63481f87fae764870c1abdcb_Group%201110.png"
            alt="Smartphone"
          />
        </div>
        {/* Second Feature */}
      </div>
      <div css={appFeatureSection}>
        <div>
          <img
            css={imgStyles2}
            src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/6310b8256fb391d0b5907328_Genres-2_iphone13midnight_portrait.png"
            alt=""
          />
        </div>
        <div css={featureTextBox2}>
          <div>
            <h3 css={featureSectionHeading}>
              You control the <br />
              discovery experience. <br />
            </h3>
            <p>
              Explore a feed of new music you haven't heard <br /> before –
              guaranteed.
            </p>
          </div>
        </div>
      </div>
      {/* 3rd Feautre */}
      <div css={appFeatureSection}>
        <div css={featureTextBox}>
          <h3 css={featureSectionHeading}>
            Be the reason artists <br />
            go viral.
          </h3>
          <p css={discriptionText}>
            Share hidden-gems with your friends.
            <br /> Be early on the next star in music. <br />
          </p>
        </div>
        <div>
          <img
            css={imgStyles}
            src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/6347f1949d97359f010efecf_Group%201111.png"
            alt="3rd Feature"
          />
        </div>
      </div>
      <div css={appFeatureSection}>
        <div>
          <img
            css={imgStyles3}
            src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/637a9f98ecc8b47c728bbeba_Group%201299-2_macbookgrey_front.png"
            alt="laptop"
          />
        </div>
        <div css={featureTextBox2}>
          <div>
            <h3 css={featureSectionHeading}>
              Artists promote directly to Gen-Z.
              <br />
            </h3>
            <p>
              Upload your songs, reach new superfans, and build community.
              <br />
            </p>
            <div>
              <a css={anchorStyle} href="/#">
                Sign up
              </a>{' '}
              for HotDrop Studio
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
