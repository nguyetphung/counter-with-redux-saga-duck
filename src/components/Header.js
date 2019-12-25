import React from "react";
import styled from "styled-components";

import rem from "polished/lib/helpers/rem";

import { css } from "styled-components";

import SearchForm from "./SearchForm";

const mobile = inner => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner};
  }
`;

const phone = inner => css`
  @media (max-width: ${650 / 16}em) {
    ${inner};
  }
`;

const _rem = size => rem(size, "18px");

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  box-sizing: border-box;
  width: 100%;

  font-size: ${_rem(15)};
  font-weight: 500;
  background: ${props => (props.transparent ? "transparent" : "black")};
  transition: background 300ms ease-out;
  color: white;
  padding: 0;
`;

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledSocial = styled.div``;

const NavBar = styled.div`
  padding: 0 20px;
  margin: 20px 0;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  ${StartWrapper} div, ${EndWrapper} ${StyledSocial} {
    ${phone(css`
      display: none;
    `)};
  }
`;

// font - family: ${ headerFont };

const Header = () => (
  <Wrapper>
    <NavBar>
      <StartWrapper>
        <RedGithub />
        <div>Search User via the GitHub API</div>
      </StartWrapper>
      <SearchForm />
      <EndWrapper>
        <StyledSocial />
      </EndWrapper>
    </NavBar>
  </Wrapper>
);

export default Header;
