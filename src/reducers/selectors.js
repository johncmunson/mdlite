// export function getContent(state) {
//     return state.content
// }

export function getTabs(state) {
    return state.documents.map(d => (
        {
          title: d.title,
          active: d.id === state.activeDocumentId,
          id: d.id
        }
    ))
}

export function getActiveDocument(state) {
    return state.documents.find(d => d.id === state.activeDocumentId)
}
