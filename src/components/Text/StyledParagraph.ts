
import styled from "styled-components";
// import { theme } from "../../styles/themes/theme";
import fontConfig from "../../styles/themes/fontConfig";
import breakpoints from "../../styles/themes/breakpoints";

export const StyledParagraph = styled.p`
    font-family: ${fontConfig["font-family-base"]};
    line-height: ${fontConfig["line-height-base"]};
    font-size: ${fontConfig["font-size-text-6"]};

    @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
        font-size: ${fontConfig["font-size-base"]};
    }

    span{
        color: #007bff;
    }

`;