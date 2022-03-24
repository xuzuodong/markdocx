import { TextRun } from 'docx'
import { marked } from '../../extendedMarked'

export interface TextOptions {
    italics?: boolean
    bold?: boolean
}

export function createText(node: marked.Tokens.Text, options?: TextOptions): TextRun {
    const { bold, italics } = options || {}
    return new TextRun({
        text: node.text,
        italics,
        bold,
    })
}
