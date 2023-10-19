import React from "react";
import { StyledButton } from "./StyledButton";

interface Props {
    children?: React.ReactNode;
    className?: string;
}

export const Button = ({ children = '', className = '', ...props }:Props) => {
  return (
    <>
        <StyledButton
            className={`${className}`}
            {...props}
        >{ children }</StyledButton>
    </>
  )
}
