import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLink = styled(NavLink)`
  padding: 6px;
  margin: 5px;
  height: 30px;
  border-radius: 6px;
  border-width: 0px;
  background-color: #4169e1;
  color: white;
  font-size: 17px;
  text-decoration: none;

  &:hover {
    background-color: #1e90ff;
  }

  &.active {
    background-color: #87cefa;
    color: #4169e1;
    text-decoration: underline;
  }
`;
