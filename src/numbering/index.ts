import { AlignmentType, INumberingOptions, LevelSuffix, LevelFormat } from 'docx'

export const numbering: INumberingOptions = {
    config: [
        {
            reference: 'heading-numbering',
            levels: [
                {
                    level: 1,
                    format: LevelFormat.DECIMAL,
                    text: '%2',
                    alignment: AlignmentType.START,
                    suffix: LevelSuffix.SPACE,
                },
                {
                    level: 2,
                    format: LevelFormat.DECIMAL,
                    text: '%2.%3',
                    alignment: AlignmentType.START,
                    suffix: LevelSuffix.SPACE,
                },
                {
                    level: 3,
                    format: LevelFormat.DECIMAL,
                    text: '%2.%3.%4',
                    alignment: AlignmentType.START,
                    suffix: LevelSuffix.SPACE,
                },
            ],
        },
    ],
}
