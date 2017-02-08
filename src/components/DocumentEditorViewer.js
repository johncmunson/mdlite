import React from 'react'
import DocumentViewer from './DocumentViewer.js'
import DocumentEditor from './DocumentEditor.js'

const DocumentEditorViewer = (props) => (
    <div>
        <DocumentEditor {...props} />
        <DocumentViewer {...props} />
    </div>
);

export default DocumentEditorViewer
