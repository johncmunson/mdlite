export default function addDocument(id, title) {
    return {
        type: 'ADD_DOCUMENT',
        title: title,
        id: id
    }
}
