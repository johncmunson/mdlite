export default function updateContent(content, id) {
    return {
        type: 'UPDATE_CONTENT',
        content: content,
        id: id
    }
}
