#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { program } from 'commander'
import { markdocx } from './markdocx'

program.requiredOption('-i, --input <path>', 'input file path')
program.requiredOption('-o, --output <path>', 'output file path')
program.parse()

const inputPath = path.join(__dirname, '../', program.opts().input)
const outputPath = path.join(__dirname, '../', program.opts().output)
const markdownText = fs.readFileSync(inputPath).toString()

;(async function () {
    const buffer = await markdocx(markdownText)
    fs.writeFileSync(outputPath, new Uint8Array(buffer))
})()
