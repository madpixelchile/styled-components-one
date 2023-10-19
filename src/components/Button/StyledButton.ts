import styled from "styled-components";
import { theme } from "../../styles/themes/theme";

export const StyledButton = styled.button`
  font-size: 16px;
  color: ${theme.colors.primary};
  background-color: ${theme.colors["btn-primary"]};
  border-radius: 6px;
  border: none;
  padding: 8px 24px;
  transition: all 300ms ease;
  cursor: pointer;
  &:hover{
    color: white;
    background-color: ${theme.colors["btn-primary-hover"]};
    transition: all 300ms ease;
  }
  &:active{
    background-color: #000;
  }
`;