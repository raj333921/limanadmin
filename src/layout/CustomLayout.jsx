import React from 'react';
import { Layout } from 'react-admin';
import Header from './Header';

const CustomLayout = (props) => (
    <Layout {...props} header={Header} />
);

export default CustomLayout;
