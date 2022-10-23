import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * Link is from react-router-dom and I learned that it's not like regular 'a' tags in that
 * for the hidden special effect, you need to make the display block
 */
const StyledAnchorTag = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: block;
  overflow: hidden;
  color: #007aaf;
  font-size: 2rem;
  border: 3px solid purple;
  padding: 1rem 2rem;
  position: relative;
  transition: all 1s;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: hotpink;
    transform: translateX(-100%);
    transition: all 0.5s;
    z-index: -1;
  }
  &:hover {
    color: white;
    &:before {
      transform: translateX(0);
    }
  }
`;
export const Home = () => {
  return (
    <>
      <h1>Hello To Infinite Wordle</h1>
        <StyledAnchorTag to="/game">Let's Play!</StyledAnchorTag>
    </>
  );
};
