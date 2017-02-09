export default function documentReducer(state = [{
    id: 'PPBqWA9',
    title: 'Markdown Syntax',
    content: `# Header

### Subheader

1. ordered 1
2. ordered 2
3. ordered 3


- unordered 1
- unordered 2
- unordered 3

*italics*

_alt-italics_

**bold**

**_itali-bold_**

~~strikethrough~~

> Block
quote

\`code\`

\`\`\`
code
block
\`\`\`
`
}, {
    id: 'PtBsWA7',
    title: 'Hello World',
    content: `# Hello World`
}], action) {
    switch (action.type) {
        case 'UPDATE_CONTENT': {
            const documentIndex = state.findIndex(
                (d) => d.id === action.id
            );
            const oldDocument = state[documentIndex]
            const newDocument = {
                ...oldDocument,
                content: action.content
            }
            return [
                ...state.slice(0, documentIndex),
                newDocument,
                ...state.slice(documentIndex + 1, state.length)
            ]
        }
        case 'UPDATE_TITLE': {
            const documentIndex = state.findIndex(
                (d) => d.id === action.id
            );
            const oldDocument = state[documentIndex]
            const newDocument = {
                ...oldDocument,
                title: action.title
            }
            return [
                ...state.slice(0, documentIndex),
                newDocument,
                ...state.slice(documentIndex + 1, state.length)
            ]
        }
        case 'ADD_DOCUMENT': {
            const newDocument = {
                id: action.id,
                title: 'New Document',
                content: `asdf`
            }
            return state.concat(newDocument)
        }
        case 'DELETE_DOCUMENT': {
            const documentIndex = state.findIndex((t) => t.id === action.id);
            return [
                ...state.slice(0, documentIndex),
                ...state.slice(
                  documentIndex + 1, state.length
                ),
            ];
        }
        default: {
            return state
        }
    }
}
