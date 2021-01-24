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
            <p>
                Принимаю <A href={'/'}>условия</A> использования
            </p>
        </CheckboxContainer>
    )
}

export default Checkbox
