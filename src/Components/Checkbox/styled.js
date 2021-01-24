import styled from 'styled-components'

const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    width: fit-content;
    font-size: 16px;
    line-height: 21px;
    color: #756f86;
    margin: 0;
`

const Icon = styled.div`
    width: 18px;
    height: 10px;
    border-left: 2px solid #0880ae;
    border-bottom: 2px solid #0880ae;
    transform: rotate(-45deg);
    align-items: center;
    margin-top: 3px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const StyledCheckbox = styled.div`
    display: flex;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: 1px solid #dbe2ea;
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 4px;
    margin-right: 5px;

    ${HiddenCheckbox}:focus + & {
        border: 1px solid #0880ae;
    }

    ${Icon} {
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
`

const A = styled.a`
    color: #0880ae;
    text-decoration: none;
`

const Styled = {
    CheckboxContainer,
    Icon,
    HiddenCheckbox,
    StyledCheckbox,
    A,
}

export default Styled
