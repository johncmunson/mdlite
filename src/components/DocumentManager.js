import React from 'react'
import DocumentViewer from './DocumentViewer.js'
import DocumentEditor from './DocumentEditor.js'
import DocumentTabs from './DocumentTabs.js'
import { Page, Row, Column } from 'hedron'

const DocumentManager = (props) => (
    <Page>
        <Row debug>
            <Column sm={12} md={12} lg={12}>
                <DocumentTabs {...props} />
            </Column>
        </Row>
        <Row debug>
            <Column sm={6} md={6} lg={6}>
                <DocumentEditor {...props} />
            </Column>
            <Column sm={6} md={6} lg={6}>
                <DocumentViewer {...props} />
            </Column>
        </Row>
    </Page>
);

export default DocumentManager
