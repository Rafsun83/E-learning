import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import APP from '../src/App'
const PORT = 8000

const app = express()

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('../build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).send("some error happend")

        }
        return res.send(data.replace(' <div id="root"></div>', ` <div id="root">${ReactDOMServer.renderToString(<APP />)}</div>`))
    })
})
app.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '10d' }))
app.listen(PORT, () => {
    console.log(`server is runnig ${PORT}`)
})







// import path from 'path'
// import fs from 'fs'
// import express from 'express'
// import React from 'react'
// import ReactDOMServer from 'react-dom/server'
// import { StaticRouter } from 'react-router-dom'


// import App from '../src/App'

// const PORT = 8000
// const app = express()

// const router = express.Router()

// app.use('/build', express.static('build'));
// app.get('*', (req, res) => {
//     const context = {}
//     const app = ReactDOMServer.renderToString(
//         <StaticRouter location={req.url} context={context}>
//             <App />
//         </StaticRouter>
//     );
//     const indexFile = path.resolve('./build/index.html')
//     fs.readFile(indexFile, 'utf8', (err, data) => {
//         if (err) {
//             console.log("error")
//             return res.status(500).send('oops!', 'erroe!')
//         }
//         return res.send(data.replace(' <div id="root"></div>', ` <div id="root">${app}</div>`))
//     })
// })
// router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '10d' }))

// app.use(router)

// app.listen(PORT, () => {
//     console.log("SSR port is : " + PORT)
// })