import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderLink = styled(NavLink)`
  padding: 5px;
  margin-left: 5px;
  max-height: 25px;
  border-radius: 6px;
  border-width: 0px;
  background-color: #4169e1;
  color: white;
  font-size: 17px;
  text-direction: none;

  &:hover {
    background-color: #1e90ff;
  }
`;
