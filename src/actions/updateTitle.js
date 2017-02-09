export default function updateTitle(title, id) {
    return {
        type: 'UPDATE_TITLE',
        title: title,
        id: id
    }
}
