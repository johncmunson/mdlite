import React from 'react'
import marked from 'marked'

function dangerouslySetInnerHTML(content) {
    const processedContent = marked(content, {
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: true
    });
    return { __html: processedContent }
}

const DocumentViewer = (props) => (
    <div dangerouslySetInnerHTML={dangerouslySetInnerHTML(props.activeDocument.content)}></div>
);

export default DocumentViewer
