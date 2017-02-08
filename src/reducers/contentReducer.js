export default function contentReducer(state = `# Header

### Subheader

1. Ordered 1
2. Ordered 2
3. Ordered 3


- Unordered 1
- Unordered 2
- Unordered 3

*italics*

_alt-italics_

**bold**

**_itali-bold_**

~~strikethrough~~

\`code\`

\`\`\`
code
block
\`\`\`
`, action) {
    switch (action.type) {
        case 'UPDATE_CONTENT': {
            return action.content
        }
        default: {
            return state
        }
    }
}
