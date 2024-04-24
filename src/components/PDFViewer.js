import React from 'react';
import Resume from '../skv.pdf';
const PDFViewer = () => {
    return (
        <div>
            <iframe src={Resume} width='100%' height='650px' title='myResume' />
        </div>
    );
};
export default PDFViewer;