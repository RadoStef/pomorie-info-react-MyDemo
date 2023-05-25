import React from 'react';
import { History } from './History';
import { PDFDownloadLink } from '@react-pdf/renderer';
import './History.css';

export const DownloadBtn = () => {
    return (
        <div className='download-section'>
            <PDFDownloadLink document={<History />} filename="print">
                {({loading}) => (loading ? <button className='download-btn_loading'>Loading document...</button> : <button className='download-btn_ready'>Download as PDF document</button>)}
            </PDFDownloadLink>
        </div>
    )
};