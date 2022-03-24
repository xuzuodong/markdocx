import { marked } from 'marked'
import { tridollar } from './tridollar'

marked.use({ extensions: [tridollar] })

export * from 'marked'
