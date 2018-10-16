import Head from 'next/head'

export default ({ children }) =>
  <main>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }

      a {
        color: #000;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
    {children}
  </main>