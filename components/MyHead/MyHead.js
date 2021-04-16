import Head from 'next/head'

export default function MyHead({title,description}) {
    return (
       <Head>
           <title>{title}</title>
                <meta name="description" content={description} />
                {/* <link rel="icon" href="/images/amt2.png" /> */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property='og:url' content='https://nagatodev.netlify.app/'/>
                <meta property='og:type' content='website'/>
                <meta property="og:image" content="https://nagatodev.netlify.app/src/amt2.png" />
                {/* <link rel="apple-touch-icon" href="/images/amt2.png" />  */}
       </Head>
    )
}
