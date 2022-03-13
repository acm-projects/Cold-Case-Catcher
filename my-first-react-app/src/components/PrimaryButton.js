import React from 'react'
import styled from 'styled-components'

function PrimaryButton({name}) {
  return (
    <ButtonStyled>
        {name}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
:root {
  --blue: rgb(005, 060, 94);
  --brown: rgb(100, 048, 071);
  --black: rgb(0, 0, 0);
  --gray: rgb(206, 214, 219);
  --red: rgb(255, 0, 0);
  --white: rgb(255, 255, 255);
  --altblue: rgb(161, 194, 215);
}

  background-color: var(--altblue);
  padding: 0.75rem 0.75rem;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  border-radius: 10px;
`;

export default PrimaryButton