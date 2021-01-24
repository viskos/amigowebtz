import styled from 'styled-components'

const StyledFormItem = styled.div`
    position: relative;
    padding-bottom: 35px;
    margin-top: ${(props) => (props.top ? '40px' : '0')};
`

const Styled = {
    StyledFormItem,
}

export default Styled
