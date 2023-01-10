// File System
const fs = require('fs')
const path = require('path')

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Folder Creating

fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        throw err
    }

    console.log('Folder was created')
})

const filePath = path.join(__dirname, 'test', 'text.txt')

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- File Creating

fs.writeFile(filePath, 'Hello NodeJS!', err => {
    if (err) {
        throw err
    }

    console.log('File was created')

    fs.writeFile(filePath, '\nHello Again!', err => {
        if (err) {
            throw err
        }
    
        console.log('File was created')
    })

    fs.appendFile(filePath, '\nHello Again and Again!', err => {
        if (err) {
            throw err
        }
    
        console.log('File was created')
    })
})

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ File Reading

fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err
    }

    console.log('Content: ', content)

    const data = Buffer.from(content)
    console.log('Content: ', data.toString())
})

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }

    console.log(content)
})
