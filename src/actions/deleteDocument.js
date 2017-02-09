export default function deleteDocument(id) {
    return {
        type: 'DELETE_DOCUMENT',
        id: id
    }
}
