import fs from 'fs'
import path from 'path'

import { Document, Packer } from 'docx'

import { marked } from '../extendedMarked'
import { styles } from '../styles'
import { numbering } from '../numbering'
import createBlocks from './createBlocks'
import createSections from './createSections'

export async function markdocx (markdown: string): Promise<Buffer> {
    const tokens = marked.lexer(markdown)
    
    // fs.writeFileSync(tokensOutputPath, JSON.stringify(tokens, undefined, 4))

    const blocks = createBlocks(tokens)
    const sections = createSections(blocks)

    const doc = new Document({ styles, numbering, sections })
    return await Packer.toBuffer(doc)
}
