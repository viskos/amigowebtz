import styled from 'styled-components'

const DropDown = styled.div`
    display: flex;
    flex-direction: column;
`

const DropDownHeader = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% - 32px);
    height: 52px;
    background: #ffffff;
    border: ${(props) =>
        props.show ? '2px solid #0880ae' : '1px solid #DBE2EA;'};
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    padding: 0 16px;
`

const DropDownBody = styled.div`
    display: ${(props) => (props.show ? 'block' : 'none')};
    background: #ffffff;
    border: 1px solid #dbe2ea;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04),
        0px 20px 20px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    margin-top: 5px;
`

const DropDownItem = styled.div`
    display: flex;
    align-items: center;
    height: 44px;
    font-size: 16px;
    color: #756f86;
    padding: 0 16px;

    &:hover {
        background: #ebf4f8;
    }
`

const Label = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #756f86;
    margin-bottom: 7px;
`

const Styled = {
    DropDown,
    DropDownHeader,
    DropDownBody,
    DropDownItem,
    Label,
}

export default Styled
