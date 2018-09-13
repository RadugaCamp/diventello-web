const fs = require('fs')
const path = require('path')

const srcPath = path.resolve(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')

const convertText = text => {
  return text
    .split('\n')
    .filter(row => row !== '\r')
    .map(row => row.replace('\r', ''))
    .map(row => row
      .split(' ')
      .map(word => ({
        word,
        active: false,
        chords: [
          {
            value: '',
            position: 'left'
          },
          {
            value: '',
            position: 'center'
          },
          {
            value: '',
            position: 'right'
          }
        ]
      }))
    )
}

const findFiles = sourcePath => {
  fs.readdir(sourcePath, (error, files) => {
    if (error) throw error

    files.forEach(fileName => {
      const fileSourcePath = path.resolve(sourcePath, fileName)

      fs.readFile(fileSourcePath, (error, content) => {
        if (error) throw error

        try {
          const convertedContentRows = convertText(String(content))
          if (convertedContentRows.length) {
            const resultData = { rows: convertedContentRows }
            const resultFileName = `${path.parse(fileName).name}.json`
            moveToDist(resultFileName, JSON.stringify(resultData))
          } else {
            console.log(`File ${fileSourcePath} is empty ar something wrong`)
          }
        } catch (error) {
          throw error
        }
      })
    })
  })
}

const moveToDist = (fileName, fileContent) => {
  const fileDistPath = path.resolve(distPath, fileName)
  fs.writeFile(fileDistPath, fileContent, 'utf8', error => {
    if (error) throw error
    console.log(`File ${fileDistPath} has written`)
  })
}

findFiles(srcPath)