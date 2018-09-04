import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = ({ color = '#E00519' }) => {
  return (
    <StyledLogo to="/">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 147 46"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group" transform="translate(-3.000000, -14.000000)" fill={color}>
            <path
              // eslint-disable-next-line
              d="M18.328125,24.3046875 C21.4218905,24.3046875 23.8437413,25.5117067 25.59375,27.9257812 C27.3437587,30.3398558 28.21875,33.6484165 28.21875,37.8515625 C28.21875,42.1797091 27.3164153,45.5312381 25.5117188,47.90625 C23.7070222,50.2812619 21.2500155,51.46875 18.140625,51.46875 C15.0624846,51.46875 12.6484462,50.3515737 10.8984375,48.1171875 L10.40625,48.1171875 L9.2109375,51 L3.75,51 L3.75,14.53125 L10.8984375,14.53125 L10.8984375,23.015625 C10.8984375,24.0937554 10.8046884,25.8203006 10.6171875,28.1953125 L10.8984375,28.1953125 C12.5703209,25.6015495 15.0468586,24.3046875 18.328125,24.3046875 Z M16.03125,30.0234375 C14.2656162,30.0234375 12.9765666,30.5664008 12.1640625,31.6523438 C11.3515584,32.7382867 10.9296877,34.5312375 10.8984375,37.03125 L10.8984375,37.8046875 C10.8984375,40.6172016 11.3164021,42.6328064 12.1523438,43.8515625 C12.9882854,45.0703186 14.3124909,45.6796875 16.125,45.6796875 C17.5937573,45.6796875 18.7617144,45.003913 19.6289062,43.6523438 C20.4960981,42.3007745 20.9296875,40.3359504 20.9296875,37.7578125 C20.9296875,35.1796746 20.4921919,33.2461002 19.6171875,31.9570312 C18.7421831,30.6679623 17.5468826,30.0234375 16.03125,30.0234375 Z M40.9921875,36.75 L44.109375,32.765625 L51.4453125,24.796875 L59.5078125,24.796875 L49.1015625,36.1640625 L60.140625,51 L51.890625,51 L44.34375,40.3828125 L41.2734375,42.84375 L41.2734375,51 L34.125,51 L34.125,14.53125 L41.2734375,14.53125 L41.2734375,30.796875 L40.8984375,36.75 L40.9921875,36.75 Z M115.921875,24.3046875 C116.89063,24.3046875 117.695309,24.3749993 118.335938,24.515625 L117.796875,31.21875 C117.218747,31.0624992 116.515629,30.984375 115.6875,30.984375 C113.406239,30.984375 111.628913,31.5703066 110.355469,32.7421875 C109.082025,33.9140684 108.445312,35.554677 108.445312,37.6640625 L108.445312,51 L101.296875,51 L101.296875,24.796875 L106.710938,24.796875 L107.765625,29.203125 L108.117188,29.203125 C108.929692,27.7343677 110.027337,26.5507857 111.410156,25.6523438 C112.792976,24.7539018 114.296867,24.3046875 115.921875,24.3046875 Z M129.960938,36.75 L133.078125,32.765625 L140.414062,24.796875 L148.476562,24.796875 L138.070312,36.1640625 L149.109375,51 L140.859375,51 L133.3125,40.3828125 L130.242188,42.84375 L130.242188,51 L123.09375,51 L123.09375,14.53125 L130.242188,14.53125 L130.242188,30.796875 L129.867188,36.75 L129.960938,36.75 Z"
              id="bk-rk"
            />
            <polygon
              id="Path"
              points="65 24 65 59.456591 94.8722356 59.456591 94.8722356 24 79.9361178 31.3619829"
            />
          </g>
        </g>
      </svg>
    </StyledLogo>
  );
};

Logo.propTypes = {
  color: PropTypes.string,
};

const StyledLogo = styled(Link)`
  width: 100px;
  height: auto;
  margin: 0;
  padding: 1em 0;
`;

export default Logo;
