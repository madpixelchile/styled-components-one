import styled from "styled-components";
import fontConfig from "../../styles/themes/fontConfig";
import breakpoints from "../../styles/themes/breakpoints";
import colors from "../../styles/themes/colors";

export const StyledRitchContent = styled.div`
    
    *{
        font-family: ${fontConfig["font-family-base"]};

        
    }

    a{
        display: inline-block;
        color: ${colors["color-link"]};
        text-decoration: underline;
    }

    @media only screen and (min-width: ${breakpoints["screen-lg"]}) {
        font-size: ${fontConfig["font-size-base"]};
    }

`;
