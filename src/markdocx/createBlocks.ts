import type { marked } from 'marked'
import { Paragraph, Table } from 'docx'

import { createHeading } from './blocks/heading'
import { createParagraph } from './blocks/paragraph'
import { createTable } from './blocks/table'

export default (tokenList: marked.TokensList): Array<Paragraph | Table> => {
    const blocks: Array<Paragraph | Table> = []

    for (const token of tokenList) {
        const type = token.type
        if (!type) continue

        switch (type) {
            case 'heading': {
                const b = createHeading(token as marked.Tokens.Heading)
                blocks.push(b)
                break
            }

            case 'space': {
                // empty row
                const b = new Paragraph({ text: `` })
                blocks.push(b)
                break
            }

            case 'paragraph': {
                const b = createParagraph(token as marked.Tokens.Paragraph)
                blocks.push(b)
                break
            }

            // TODO
            // case 'image':
            //     // create image 创建图片
            //     block = new Paragraph({ text: `image` })
            //     blocks.push(block)
            //     break

            // TODO
            // case 'list':
            //     // create ol/ul 创建有序 / 无序列表
            //     const b = new Paragraph({ text: `list` })
            //     blocks.push(b)
            //     break

            case 'table': {
                // create table 创建表格
                const b = createTable(token as marked.Tokens.Table)
                blocks.push(b)
                blocks.push(new Paragraph(''))
                break
            }

            default: {
                break
            }
        }
    }

    return blocks
}
