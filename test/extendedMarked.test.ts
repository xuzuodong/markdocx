import fs from 'fs'
import { marked } from '../src/extendedMarked/index'
import { test, expect } from 'vitest'

test('extended marked', () => {
    const src = fs.readFileSync('./examples/test.md').toString()
    expect(marked.Lexer.lex(src)).toMatchSnapshot()
})
