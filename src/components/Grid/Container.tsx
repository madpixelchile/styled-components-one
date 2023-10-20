import { StyledGrid } from "./StyledGrid";

interface Props{
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
}

export const Container = ( { children = null, className = '', ...props } : Props) => {
  return (
    <>
        {  <StyledGrid className={`container ${className}`} {...props} >{ children }</StyledGrid>  }
    </>
  )
}

export default Container;

