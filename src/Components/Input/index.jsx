import React from 'react'
import Styled from './styled'

const { StyledInput, Label } = Styled

const Input = ({ label, onChange, ...props }) => {
    return (
        <>
            <Label>{label}</Label>
            <StyledInput onChange={onChange} {...props} />
        </>
    )
}

export default Input
