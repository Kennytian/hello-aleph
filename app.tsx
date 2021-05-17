import React, { ComponentType } from 'react'

type Metadata = {
    title?: string
    url?: string
}

export default function App({ Page, pageProps }: { Page: ComponentType<any> & { meta: Metadata }, pageProps: any }) {
    const links = {
        'Home': '/',
        'Home2': '/home',
        'About': '/about',
        'Query 0': '/query',
        '用户': '/user',
        '404': '/404',
        'Query 1': '/query?q=hello&limit=10&offset=20',
        'Pink': '/colors/pink',
        'Orange': '/colors/orange',
        'Teal': '/colors/teal',
        'Dark Blue': '/colors/darkblue?text=yellow',
        'Dark Green': '/colors/darkgreen?text=orange',
    }

    return (
        <main>
            <head>
                <title>{Page.meta?.title||'这个页面没标题？'}</title>
                <meta name="viewport" content="width=device-width" />
                <link rel="stylesheet" href="./style/app.css"/>
            </head>
            <p>共同内容开始</p>
            <nav>
                {Object.entries(links).map(([name, link]) =>  <a key={name} href={link}>{name}</a> )}
            </nav>
            <p>共同内容结束</p>
            <Page {...pageProps} />
        </main>
    )
}
