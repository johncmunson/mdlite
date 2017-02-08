import React from 'react'

const documentEditorStyles = {
    height: '300px',
    width: '400px'
}

const DocumentEditor = (props) => {
    let input;
    return (
        <textarea
            ref={node => input = node}
            onChange={() => props.handleChange(input.value)}
            type="text"
            value={props.content}
            style={documentEditorStyles}
        >
        </textarea>
    );
};

export default DocumentEditor
