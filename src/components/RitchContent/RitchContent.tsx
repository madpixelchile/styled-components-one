import React from "react";
import { StyledRitchContent } from "./StyledRitchContent";


interface Props {
    children?: React.ReactNode;
    [key: string]: any;
}


export const RitchContent:React.FC<Props> = ({ children = null, ...props }) => {
    return (
        <StyledRitchContent {...props}>
            { children }
        </StyledRitchContent>
    )
}

export default RitchContent;