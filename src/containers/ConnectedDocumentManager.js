import { connect } from 'react-redux'
import DocumentManager from '../components/DocumentManager.js'
import addDocument from '../actions/addDocument.js'
import deleteDocument from '../actions/deleteDocument.js'
import updateContent from '../actions/updateContent.js'
import updateTitle from '../actions/updateTitle.js'
import updateActiveDocumentId from '../actions/updateActiveDocumentId.js'
import { getActiveDocument, getTabs } from '../reducers/selectors.js'

const mapStateToDocumentManagerProps = (state) => (
    {
        activeDocument: getActiveDocument(state),
        tabs: getTabs(state)
    }
);

const mapDispatchToDocumentManagerProps = (dispatch) => (
    {
        handleContentChange: (content, id) => {
            dispatch(updateContent(content, id))
        },
        handleTabClick: (id) => {
            dispatch(updateActiveDocumentId(id))
        },
        handleAddDocumentClick: (id) => {
            dispatch(addDocument(id))
            dispatch(updateActiveDocumentId(id))
        },
        handleDeleteDocumentClick: (id) => {
            dispatch(deleteDocument(id))
            // dispatch(findANewActiveDocument)
        },
        handleTitleChange: (title, id) => {
            dispatch(updateTitle(title, id))
        }
    }
);

const ConnectedDocumentManager = connect(
    mapStateToDocumentManagerProps,
    mapDispatchToDocumentManagerProps
)(DocumentManager);

export default ConnectedDocumentManager;
