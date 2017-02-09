export default function activeDocumentIdReducer(state = 'PPBqWA9', action) {
    switch (action.type) {
        case 'UPDATE_ACTIVEDOCUMENTID': {
            return action.id
        }
        default: {
            return state
        }
    }
}
