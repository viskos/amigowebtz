import styled from 'styled-components'

const Error = styled.div`
    display: ${(props) => (props.show ? 'block' : 'none')};
    font-size: 14px;
    color: #ff7171;
    position: absolute;
    bottom: 7%;
`
const Styled = {
    Error,
}

export default Styled
