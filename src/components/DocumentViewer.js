import React from 'react'
import marked from 'marked'

function dangerouslySetInnerHTML(content) {
    const processedContent = marked(content, {sanitize: true})
    return { __html: processedContent }
}

const DocumentViewer = (props) => (
    <div dangerouslySetInnerHTML={dangerouslySetInnerHTML(props.content)}></div>
);

export default DocumentViewer
