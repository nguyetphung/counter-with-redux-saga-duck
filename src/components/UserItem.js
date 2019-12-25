import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import UserImage from "./UserImage";

// User: {
//     color: 'inherit',
//   },

//   User_wrapAvatar: {
//     marginRight: 15,
//   },

//   User_username: {
//     fontSize: 20,
//   },

const StyledLink = styled(Link)`
  display: flex;
  background: lightGrey;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
  padding: 0 8px;
`;

const DivWrapper = styled.div`
  padding: 0 8px;
`;
const StyledUserItem = styled.div``;
const UserItem = ({ login, avatar_url }) => {
  return (
    <StyledLink to={login}>
      <UserImage url={avatar_url} name={login} width={90} />
      <DivWrapper>
        <p>{login}</p>
        <p>username</p>
        <p>bio</p>
      </DivWrapper>
    </StyledLink>
  );
};

UserItem.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired
};

export default UserItem;
