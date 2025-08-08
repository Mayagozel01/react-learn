import styled from "styled-components";


const MyHeading = styled.h1`
  font-family: Tahoma, sans-serif;
  color:#c9b1af;
  font-size:${props=>props.fsize || '40px'};
  `;


const Myheading = ({children, fsize})=>{
    return(

        <MyHeading fsize={fsize}>{children}</MyHeading>
    )

}

export default Myheading;