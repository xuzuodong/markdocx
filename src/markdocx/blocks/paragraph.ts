import fs from 'fs'
import path from 'path'
import { ExternalHyperlink, ImageRun, Paragraph, TextRun } from 'docx'
import { createText } from '../inlines/text'
import { Token, Tokens } from '../../types/marked'
import { program } from 'commander'

function createInline(token: Token, parentTypes: string[]): TextRun | ImageRun {
    function matchType(type: string) {
        return parentTypes.some((i) => i === type)
    }

    switch (token.type) {
        case 'text': {
            return createText(token as Tokens.Text, {
                italics: matchType('em'),
                bold: matchType('strong'),
            })
        }

        case 'image': {
            const { href, text: caption } = token as Tokens.Image
            let src = ''

            if (/^http/.test(href)) {
                // TODO: download image and parse
            } else {
                const outputDir = path.dirname(path.join(process.cwd(), program.opts().output))
                src = path.join(outputDir, href)
            }

            return new ImageRun({
                data: fs.readFileSync(src),
                transformation: {
                    width: 200,
                    height: 200,
                },
            })
        }

        default: {
            return new TextRun('')
        }
    }
}

export function createParagraph(node: Tokens.Paragraph): Paragraph {
    const children: Array<ExternalHyperlink | TextRun> = []
    const parentTypes: string[] = []

    function searchInline(tokens: Token[]) {
        tokens.forEach((token) => {
            if ('tokens' in token && token.tokens?.length) {
                parentTypes.push(token.type)
                searchInline(token.tokens)
            } else {
                const inline = createInline(token, parentTypes)
                children.push(inline)
            }
        })
        parentTypes.pop()
    }

    searchInline(node.tokens)

    return new Paragraph({ children })
}
