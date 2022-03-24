import { Table, TableRow, TableCell, Paragraph, AlignmentType } from 'docx'
import type { marked } from 'marked'

export const createTable = (node: marked.Tokens.Table): Table => {
    // console.log(node)
    const rows: Array<TableRow> = []

    // first, insert table header
    const headerRow: Array<TableCell> = []
    node.header.forEach((cellNodes) => {
        headerRow.push(
            new TableCell({
                children: [new Paragraph({ text: cellNodes.text, style: 'TableParagraph' })],
            })
        )
    })
    rows.push(new TableRow({ children: headerRow }))

    // then, insert body row by row
    node.rows.forEach((rowNode) => {
        const bodyRow: Array<TableCell> = []
        rowNode.forEach((cellNodes) => {
            bodyRow.push(
                new TableCell({
                    children: [new Paragraph({ text: cellNodes.text, style: 'TableParagraph' })],
                })
            )
        })
        rows.push(
            new TableRow({
                children: bodyRow,
            })
        )
    })

    return new Table({
        rows,
        alignment: AlignmentType.CENTER,
    })
}
