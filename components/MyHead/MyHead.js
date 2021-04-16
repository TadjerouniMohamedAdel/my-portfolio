import Head from 'next/head'

export default function MyHead({title}) {
    return (
       <Head>
           <title>{title}</title>
                <meta name="description" content="Adel Mohamed Tadjerouni est un développeur full stack passionné principalement par le web mais aussi pour le développement mobile desktop et le Devops en troisième degré .je suis du type autodidacte, j'adore l'autoapprentissage et j'appuie sur cette faculté pour améliorer mes compétences techniques.Ma grande motivation est d'être un full stack qui metrise très bien le FRONT et BACK END en même temps .même si c'est difficile de se concentrer sur les deux, je travaille et je me forme tous les jours pour atteindre cet objectif" />
                {/* <link rel="icon" href="/images/amt2.png" /> */}
                <meta property="og:title" content="Adel Mohamed Tadjerouni Portfolio" />
                <meta property="og:description" content="Adel Mohamed Tadjerouni est un développeur full stack passionné principalement par le web mais aussi pour le développement mobile desktop et le Devops en troisième degré .je suis du type autodidacte, j'adore l'autoapprentissage et j'appuie sur cette faculté pour améliorer mes compétences techniques.Ma grande motivation est d'être un full stack qui metrise très bien le FRONT et BACK END en même temps .même si c'est difficile de se concentrer sur les deux, je travaille et je me forme tous les jours pour atteindre cet objectif" />
                <meta property='og:url' content='https://nagatodev.netlify.app/'/>
                <meta property='og:type' content='website'/>
                <meta property="og:image" content="https://nagatodev.netlify.app/src/amt2.png" />
                {/* <link rel="apple-touch-icon" href="/images/amt2.png" />  */}
       </Head>
    )
}
