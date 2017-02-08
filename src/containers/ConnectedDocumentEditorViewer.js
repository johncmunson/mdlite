import { connect } from 'react-redux'
import DocumentEditorViewer from '../components/DocumentEditorViewer.js'
import updateContent from '../actions/updateContent.js'
import { getContent } from '../reducers/selectors.js'

const mapStateToDocumentEditorViewerProps = (state) => (
    {
        content: getContent(state)
    }
);

const mapDispatchToDocumentEditorViewerProps = (dispatch) => (
    {
        handleChange: (content) => {
            dispatch(updateContent(content));
        }
    }
);

const ConnectedDocumentEditorViewer = connect(
    mapStateToDocumentEditorViewerProps,
    mapDispatchToDocumentEditorViewerProps
)(DocumentEditorViewer);

export default ConnectedDocumentEditorViewer;
