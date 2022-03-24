import { ISectionOptions, Paragraph, Table } from 'docx'

export default (blocks: (Paragraph | Table)[]): ISectionOptions[] => {
    return [
        {
            children: [...blocks],
            properties: {
                page: {
                    margin: {
                        bottom: 1440,
                        top: 1440,
                        left: 1440,
                        right: 1440,
                    },
                },
            },
        },
    ]
}
