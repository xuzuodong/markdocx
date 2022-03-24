import { marked } from 'marked'

/**
 * custom syntax
 * i.e. $$$ Some text here ... $$$
 */
export const tridollar: marked.TokenizerExtension = {
    name: 'tridollar',
    level: 'block',
    tokenizer(src: string) {
        const rule = /^\${3}(.+)\${3}(:?\n|$)/
        const match = rule.exec(src)

        if (match) {
            const token = {
                type: 'tridollar',
                raw: match[0],
                text: match[1].trim(),
                tokens: [],
            }
            return token
        }
    },
}
