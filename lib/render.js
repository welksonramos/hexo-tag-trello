const util = require("hexo-util");

module.exports = hexo => {
  let raw = util.htmlTag("script", {src: "https://p.trellocdn.com/embed.min.js"}, "");
  raw+= `
  <script>
  if(window.TrelloCards) {
    setTimeout(() => window.TrelloCards.load(), 1000);
  }
  </script>`;
  const renderTrello = args => {
    const { config } = hexo;
    const [ url, mode ] = args;
    // eslint-disable-next-line init-declarations
    let compactMode;

    if(mode !== undefined) {
      compactMode += mode || config.trello.compact;
    }

    return `
    <blockquote class=${compactMode ? "trello-card-compact" : "trello-card"}>
    <a href="${url}">Trello Card</a>
    </blockquote>
    ${raw}
    `;
  };

  return renderTrello;
};
