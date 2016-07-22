export default function generateIndex(location) {
  return `<html>
    <head>
      <title>NOVAReact</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css"/>
      <style>
        body {
          padding:10px
        }
        section {
          width: 32%;
          margin-left: 10px;
          float: left;
        }
        ul {
          list-style: none;
          padding-left: 0;
        }
        span {
          margin-left: 20px;
          color: purple;
        }
        .item button {
          float: right;
        }
      </style>
    </head>
    <body>
      <div id="app-container"></div>
      <script type="text/javascript" src="${location}" charset="utf-8"></script>
    </body>
  </html>`
};
