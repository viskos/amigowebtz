import styled from 'styled-components'

const StyledInput = styled.input`
    width: calc(100% - 32px);
    height: 52px;
    background: #ffffff;
    border: 1px solid #dbe2ea;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    font-size: 16px;
    outline: none;
    padding: 0 16px;

    &::placeholder {
        font-size: 16px;
        color: #7c9cbf;
    }

    &:focus {
        border: 2px solid #0880ae;
    }
`

const Label = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #756f86;
    margin-bottom: 7px;
`

const Styled = {
    StyledInput,
    Label,
}

export default Styled
