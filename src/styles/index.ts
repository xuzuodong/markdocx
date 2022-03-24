import { IStylesOptions } from 'docx'
const fontSize = 12 // word 中的字号

export const styles: IStylesOptions = {
    paragraphStyles: [
        {
            id: 'Normal',
            name: 'Normal',
            // basedOn: 'Normal', // 加了这行, WPS 将打不开生成的文件
            next: 'Normal',
            quickFormat: true,
            run: {
                size: fontSize * 2, // docx.js 中字号单位为 "半点", 因此要乘二
                font: {
                    ascii: 'Times New Roman',
                    eastAsia: '仿宋',
                },
            },
            paragraph: {
                spacing: {
                    line: fontSize * 20 * 1.5, // 行距单位为 "twip" (点 * 20), 1.5 倍行距
                },
                indent: {
                    firstLine: fontSize * 20 * 2, // 2 字符
                },
            },
        },

        {
            id: 'Heading1',
            name: 'Heading 1',
            basedOn: 'Normal',
            next: 'Normal',
            quickFormat: true,
            run: {
                size: 30,
                bold: true,
                color: '000000',
            },
            paragraph: {
                indent: {
                    firstLine: 0,
                },
            },
        },

        {
            id: 'Heading2',
            name: 'Heading 2',
            basedOn: 'Normal',
            next: 'Normal',
            quickFormat: true,
            run: {
                size: 28,
                bold: true,
                color: '000000',
            },
            paragraph: {
                indent: {
                    firstLine: 0,
                },
            },
        },

        {
            id: 'Heading3',
            name: 'Heading 3',
            basedOn: 'Normal',
            next: 'Normal',
            quickFormat: true,
            run: {
                size: 24,
                bold: true,
                color: '000000',
            },
            paragraph: {
                indent: {
                    firstLine: 0,
                },
            },
        },

        {
            id: 'TableParagraph',
            name: 'Table Paragraph',
            basedOn: 'Normal',
            next: 'Normal',
            quickFormat: true,
            paragraph: {
                spacing: {
                    line: 240,
                },
                indent: {
                    firstLine: 0,
                },
            },
        },
    ],
}
