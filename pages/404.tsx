import Button from 'components/common/Button';
import PageTitle from 'components/common/PageTitle';
import Layout from 'components/layout';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Page404 = () => {
    const click = (e) => {
        e.preventDefault();

        window.location.href = '/';
    }

    return (
        <Layout>
            <Container> 
                <PageTitle.h1 style={{ fontSize: "50px", padding: 0 }}>404</PageTitle.h1>
                <PageTitle.h2 style={{ fontSize: "27px", padding: 0 }}>Page not found</PageTitle.h2>
                <p style={{ marginBottom: "40px", marginBlockStart: "0" }}>We couldn’t find the page you’re looking for</p>
                <Button onClick={click}>
                    <>Back to home</>
                </Button>
            </Container>
        </Layout>
    );
};

export default Page404;