import styled from 'styled-components'

const StyledButton = styled.button`
    width: 100%;
    height: 55px;
    padding: 18px 65px;
    border: none;
    background: #0880ae;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
        0px 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: 6px;
    font-size: 16px;
    color: #ebf4f8;
    outline: none;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08),
            0px 24px 48px rgba(44, 39, 56, 0.16);
    }

    &:active {
        border: 2px solid rgba(44, 39, 56, 0.86);
    }

    &:disabled {
        background: #dbe2ea;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
        color: #2c2738;
        opacity: 0.5;
    }
`

const Styled = {
    StyledButton,
}

export default Styled
