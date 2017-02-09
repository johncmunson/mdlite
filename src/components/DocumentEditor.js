import React from 'react'

const documentEditorStyles = {
    height: '100%',
    minWidth: '100%',
    maxWidth: '100%'
}

const DocumentEditor = (props) => {
    let input;
    return (
        <textarea
            ref={node => input = node}
            onChange={() => props.handleContentChange(input.value, props.activeDocument.id)}
            type="text"
            value={props.activeDocument.content}
            style={documentEditorStyles}
        >
        </textarea>
    );
};

export default DocumentEditor
