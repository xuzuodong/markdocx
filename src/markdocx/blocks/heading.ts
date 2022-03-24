import { Paragraph, HeadingLevel } from 'docx'
import type { marked } from 'marked'

export const createHeading = (node: marked.Tokens.Heading): Paragraph => {
    const { depth, text } = node

    let heading: HeadingLevel
    switch (depth) {
        case 1:
            heading = HeadingLevel.HEADING_1
            break

        case 2:
            heading = HeadingLevel.HEADING_2
            break

        case 3:
            heading = HeadingLevel.HEADING_3
            break

        case 4:
            heading = HeadingLevel.HEADING_4
            break

        case 5 || 6:
            console.warn(`识别到 ${node.depth} 级节点，将转换成四级标题。文本内容为：${node.text}`)
            heading = HeadingLevel.HEADING_4
            break

        default:
            console.warn('识别到 Heading 节点，但无法识别这个节点的级别')
            heading = HeadingLevel.TITLE
            break
    }

    return new Paragraph({
        text,
        heading,
        numbering: {
            reference: 'heading-numbering',
            level: depth,
            custom: true,
        },
    })
}
