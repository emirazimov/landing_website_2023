import React from 'react';
import styled from 'styled-components';
import { remoteImageLoader } from 'helpers/image';
import { NumericFormat } from 'react-number-format';
import { Container, Header, Footer, Body, DetailRow, Label, TotalPriceLabel, TotalPrice, CompanyLogo, LogoPlaceholder, Title } from './style';
import { Row, Title as Subtitle } from 'components/common/booking/styles';
import { getFormattedDateWithZeroPreffixStringDate, getFormattedTimeFromDateString } from 'helpers/form';

export const Value = styled.span`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: start;
`;

const InvoceDetail = ({ invoiceDetail, tips = 0 }: { invoiceDetail: InvoiceDetailType | null, tips: number }) => {    
    return (
        <Container>
            <Header style={{ display: "block" }}>
                <Subtitle style={{ marginBottom: "20px" }}>Reservation information</Subtitle>
				<Row style={{ justifyContent: "start", alignItems: "center", gap: "10px" }}>
                    {
                        invoiceDetail?.invoiceCompanyInfo?.companyLogo ? 
                            <CompanyLogo
                                width={60}
                                height={60}
                                alt="Company logo"
                                src={invoiceDetail?.invoiceCompanyInfo?.companyLogo}
                                loader={remoteImageLoader}
                            /> :
                            <LogoPlaceholder />
                    }
                    <Title style={{ fontSize: "14px", margin: 0 }}>{invoiceDetail?.invoiceCompanyInfo?.companyName ?? 'Company Name'}</Title>
                </Row>
            </Header>
            <Body>
                <DetailRow>
                    <Label>Invoice number</Label>
                    <Value>#{invoiceDetail?.invoiceReservationInfo?.paymentId}</Value>
                </DetailRow>
                <DetailRow>
                    <Label>From</Label>
                    <Value>{invoiceDetail?.invoiceReservationInfo?.addressFrom}</Value>
                </DetailRow>
                <DetailRow>
                    <Label>To</Label>
                    <Value>{invoiceDetail?.invoiceReservationInfo?.addressTo}</Value>
                </DetailRow>
                <DetailRow>
                    <Label>Persons</Label>
                    <Value>{invoiceDetail?.invoiceReservationInfo?.personsQty}</Value>
                </DetailRow>
                <DetailRow>
                    <Label>Date</Label>
                    <Value>{getFormattedDateWithZeroPreffixStringDate(invoiceDetail?.invoiceReservationInfo?.date)}</Value>
                </DetailRow>
                <DetailRow>
                    <Label>Time</Label>
                    <Value>{getFormattedTimeFromDateString(invoiceDetail?.invoiceReservationInfo?.date)}</Value>
                </DetailRow>
                <DetailRow>
                    <Label>Gratuity</Label>
                    <NumericFormat
                        value={tips.toFixed(2)}
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) => <Value>${value}</Value>}
                    />
                </DetailRow>
            </Body>
            <Footer>
                <TotalPriceLabel>Total</TotalPriceLabel>
                <NumericFormat
                    value={invoiceDetail?.total?.toFixed(2)}
                    thousandSeparator=","
                    displayType="text"
                    renderText={(value) => <TotalPrice>${value}</TotalPrice>}
                />
            </Footer>
        </Container>
    );
};

export default InvoceDetail;