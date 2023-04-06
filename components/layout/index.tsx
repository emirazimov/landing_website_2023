import styled from 'styled-components';
import Header from './Header'
import Footer from './Footer';
import { mediaDevice } from 'helpers/responsiveUITools';
import background from "public/background.webp";

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Content = styled.div`
	width: 100%;
	max-width: 1436px;
	background-position-x: center;
	background-image: url('${background.src}');
	background-position-y: 30px;
	background-repeat: no-repeat;

	${mediaDevice['mobile']`
		background: none;
	`}
`;

const ChildrenContainer = styled.main`
	flex: 1;
`;

export default function Layout({ children }: { children: JSX.Element, en?: boolean }) {

	return (
		<Container>
			<Header />
			<Content>
				<ChildrenContainer className='container'>{children}</ChildrenContainer>
			</Content>
			<Footer />
		</Container>
	)
}
