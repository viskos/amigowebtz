import React from 'react'
import Styled from './styled'

const { Error } = Styled

const StyledError = (props) => {
    return <Error {...props}>Введено не корректное значение</Error>
}

export default StyledError
