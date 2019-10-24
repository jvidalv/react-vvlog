import styled from "styled-components";
import { THEMES } from "../constants/Themes";
import { Card } from "react-bootstrap";

export const AuthorPhoto = styled.img`
  border-radius: 50%;
  transition: 0.25s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;