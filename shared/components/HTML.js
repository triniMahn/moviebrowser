import React from 'react';

const HTML = (props) => (
  <html lang="en">
    <head>
      <title>Isomorphic Router Demo</title>
      
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
    </head>
    <body>
      <div 
        id="root"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
      <script dangerouslySetInnerHTML={{
          __html:
            `window.__SERIALIZED_STATE__ = ${props.serverState};`
        }}
      />
    <script type="application/javascript" src="/main.bundle.js" />
    </body>
  </html>
);

export default HTML;
