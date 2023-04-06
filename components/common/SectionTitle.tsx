import styled from 'styled-components';
import { mediaDevice } from 'helpers/responsiveUITools';


const Title = styled.span`
    display: block;
	font-weight: 800;
	font-size: 48px;
	line-height: 59px;
	display: block;

    ${mediaDevice['mobile']`
        font-weight: 700;
        font-size: 26px;
        line-height: 32px;
    `}
`;


export default Title;
