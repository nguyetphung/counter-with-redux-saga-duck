import React, { Component } from "react";

import styled, { css, createGlobalStyle } from "styled-components";

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

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 auto;
`;

const resetInput = css`
  background: none;

  border: none;
`;
// outline: none;
const Input = styled.input`
  ${resetInput};
  appearance: none;
  flex: 0 0 auto;
  width: 150px;
  line-height: 40px;
  font-size: 15px;

  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border-radius: 3px;

  ::placeholder {
    color: currentColor;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
  :focus {
    ::placeholder {
      opacity: 0.8;
    }
  }
`;

const INPUT_ID = "user-search-input";

const Button = styled.label.attrs({
  htmlFor: INPUT_ID
})`
  ${resetInput};
  flex: 0 0 auto;
  ${resetInput} flex: 0 0 auto;
  margin-right: 4px;
  cursor: pointer;
  display: flex;
  &:hover,
  &:focus {
    opacity: 0.7;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <Wrapper>
        <Button>
          <RedSearch />
        </Button>
        <Input
          id={INPUT_ID}
          ref={this.inputRef}
          placeholder="Search for users"
          onMouseEnter={() => {
            this.inputRef.current.focus();
          }}
          type="search"
        />
      </Wrapper>
    );
  }
}

export default SearchForm;
