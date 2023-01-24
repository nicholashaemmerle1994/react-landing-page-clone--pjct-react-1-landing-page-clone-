/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const headerSectionStyle = css`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 148px;
  padding: 0 20px;
`;
const navigationMenuStyle = css`
  list-style-type: none;
  display: flex;
  gap: 30px;
  font-family: 'Varela Round', sans-serif;
  line-height: 20px;
  padding: 20px;
  justify-content: space-around;
  li {
    > a {
      text-decoration: none;
      color: white;
      padding: 0px 50px;
      font-weight: 900;
    }
  }
`;
const h1Styles = css`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 900;
  font-size: 55px;
  line-height: 50px;

  span {
    color: #e63963;
  }
`;

const descriptionStyles = css`
  margin-top: 50px;
  position: relative;
  max-width: 100%;
  margin-bottom: 40px;
  align-self: center;
  flex: 0 0 auto;
  left: 6ya0px;
  margin-bottom: 160px;
`;

const descriptionTextStyles = css`
  width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  line-height: 15px;
`;

const smartphoneStyles = css`
  width: 600px;
`;
const descriptsection = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const button1 = css`
  margin-top: 40px;
  margin-right: 20px;
  font-weight: 900;
  border: 1x solid black;
  height: 60px;
  width: 200px;
  border-radius: 30px;
  line-height: 20px;
  font-size: 18px;
  background-color: white;
  color: #e63963;
`;
const button2 = css`
  font-weight: 900;
  height: 60px;
  width: 200px;
  border-radius: 30px;
  line-height: 20px;
  font-size: 18px;
  background-color: #e63963;
  color: white;
  border: 1x solid black;
`;

export default function FirstComponent() {
  return (
    <div>
      <header>
        <div css={headerSectionStyle}>
          <div>
            <img
              style={{ width: '100px' }}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/630e348760dd00d247034585_Logo%20for%20web.svg"
              alt="logo"
            />
          </div>
          <nav>
            <ul css={navigationMenuStyle}>
              <li>
                <a href="/#">Get in touch</a>
              </li>
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Join our team</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* description Part with Smartphone img */}
        <div css={descriptsection}>
          <div css={descriptionStyles}>
            <h1 css={h1Styles}>
              Discover music.
              <br />
              <span>Support artists.</span>
            </h1>
            {/* Text part of the description */}
            <div css={descriptionTextStyles}>
              Stuck listening to the same mainstream <br /> <br />
              songs and artists on-repeat?
              <br /> <br /> <br /> <br />
              Keep your music taste fresh with millions of <br /> <br />
              new songs you've never heard before. <br /> <br /> <br /> <br />
              Join the movement, become a superfan.
            </div>
            <button css={button1}>DISCOVER MUSIC</button>{' '}
            <button css={button2}>PROMOTE MUSIC</button>
          </div>
          {/* smartphone div */}
          <div>
            <img
              css={smartphoneStyles}
              src="https://uploads-ssl.webflow.com/630e348760dd00665a03452e/63491d729c6a15033540e97e_Group%201113%20(2).png"
              alt=""
            />
          </div>
        </div>
      </header>
    </div>
  );
}