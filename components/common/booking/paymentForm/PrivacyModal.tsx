import React from 'react';
import { Modal } from 'react-responsive-modal';
import styled from 'styled-components';

const Text = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: block;
    padding: 4px;
`;

type Props = {
    isVisible: boolean,
    toggleVisibility: () => void,
}

const textArray = [
    'Privacy Policy',
    'Privacy Policy of Bookinglane',
    'Bookinglane collects some Personal Data from its Users.',
    'Personal Data collected for the following purposes and using the following services:',
    'Analytics',
    '● Google Analytics',
    '● Personal Data: Tracker; Usage Data',
    'Beta Testing',
    '● App Center',
    '● Personal Data: Data communicated while using the service; email address; various types of Data as specified in the privacy policy of the service',
    'Displaying content from external platforms',
    '● Google Maps widget and Instagram widget',
    '● Personal Data: Tracker; Usage Data',
    'Handling payments',
    '● Stripe',
    'Personal Data: billing address; email address; first name; last name; purchase history; various types of Data as specified in the privacy policy of the service Apple Pay Personal Data: billing address; email address; first name; last name; payment info; phone number; purchase history; various types of Data as specified in the privacy policy of the service',
    'Payments processed via the Google Play Store',
    'Personal Data: billing address; email address; first name; last name; payment info; phone number; purchase history',
    'Hosting and backend infrastructure',
    'Amazon Web Services (AWS) Personal Data: various types of Data as specified in the privacy policy of the service',
    'Interaction with external social networks and platforms',
    '● LinkedIn button and social widgets and Twitter Tweet button and social widgets Personal Data: Tracker; Usage Data',
    '● Buffer button and social widgets Personal Data:Usage Data',
    'Interaction with live chat platforms',
    '● ClickDesk Widget',
    'Personal Data: Data communicated while using the service; Tracker; Usage Data',
    'Platform services and hosting',
    '● Apple App Store and Google Play Store',
    'Personal Data: Usage Data',
    'Contact information',
    '● Owner and Data Controller',
    'Bookinglane LLC 1905 Concord Blvd, Concord, 94520, CA, USA',
    'Owner contact email: info@bookinglane.com',
];

const PrivacyModal = ({ isVisible, toggleVisibility }: Props) => {
    return (
        <Modal open={isVisible} onClose={toggleVisibility} center>
            <h2>Privacy policy</h2>
            {textArray.map((text, index) => (
                <Text key={index}>{text}</Text>
            ))}
        </Modal>
    );
};

export default PrivacyModal;
