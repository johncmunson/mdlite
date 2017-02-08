export default function contentReducer(state = `# Header

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
