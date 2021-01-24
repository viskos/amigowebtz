import React from 'react'
import Styled from './styled'

const { CheckboxContainer, Icon, HiddenCheckbox, StyledCheckbox, A } = Styled

const Checkbox = ({ checked, onChange }) => {
    return (
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} onChange={onChange} />
            <StyledCheckbox checked={checked}>
                <Icon />
            </StyledCheckbox>
            Принимаю <A href={'/'}>условия</A> использования
        </CheckboxContainer>
    )
}

export default Checkbox
