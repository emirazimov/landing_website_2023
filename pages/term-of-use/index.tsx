import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { SERVER_URL } from 'api';
import styled from 'styled-components';
import Layout from 'components/layout';
import PageTitle from 'components/common/PageTitle';
import Partners from 'components/common/Partners';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';


const Container = styled.div`
    flex: 1;
`;

const Description = styled.span`
	margin-top: 40px;
    display: block;
    flex: 1;
    font-weight: 400;
    font-size: 18px;
    line-height:  30px;
    margin-right: 30px;
	word-wrap: break-word;
	white-space: pre-wrap;

    ${mediaDevice['mobile']`
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;
        margin-right: 0px !important;
        margin-top: 15px;
    `}
`;

const TermOfUse = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['termOfUse'],
		queryFn: () =>
			fetch(`${SERVER_URL}/home/term-of-use`).then(
				(res) => res.text(),
			),
	});

	console.log('data is ===========+> ', data);

    return (
        <Layout>
            <Container>
                <PageTitle.h1>Term of use</PageTitle.h1>
				<Description>{data}</Description>
                <Partners />
            </Container>
        </Layout>
    );
};

export default TermOfUse;