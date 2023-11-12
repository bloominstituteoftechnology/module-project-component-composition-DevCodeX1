import React from "react"
import styled from "styled-components"

const StyledFigure = styled.figure`
max-width: 60%;

figcaption{
  font-style: italic;
}

`

export default function Figure({imageURL, caption}){
    return(
      <StyledFigure color="red">
        <img src={imageURL}/>
        <figcaption>Awsome picture taken on {caption}</figcaption>
      </StyledFigure>
    )
  }