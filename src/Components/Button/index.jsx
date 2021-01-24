import React from 'react'
import Styled from './styled'

const { StyledButton } = Styled

const Button = ({ text, disabled, onClick }) => {
    return (
        <StyledButton disabled={disabled} onClick={onClick}>
            {text}
        </StyledButton>
    )
}

export default Button
