import React from "react";

import Header from "../components/Header";
import styled from "styled-components";

import RepositoryItem from "../components/RepositoryItem";

const StyeldHeader = styled(Header)``;
const ContentWrapper = styled.div`
  padding-top: 150px;
`;
const Wrapper = styled.div`
  ${StyeldHeader} {
  }
`;
const Home = () => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>Home~!</ContentWrapper>
      <ul>
        <li>
          <RepositoryItem />
        </li>
      </ul>
    </Wrapper>
  );
};

// <UserItem
//   login={"https://github.com/00aney"}
//   avatar_url={
//     "https://avatars2.githubusercontent.com/u/20268356?s=460&v=4"
//   }
// />
export default Home;
