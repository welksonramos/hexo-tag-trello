module.exports = hexo => {
  const renderTrello = args => {
    const { config } = hexo;
    const [ url, mode ] = args;
    // eslint-disable-next-line init-declarations
    let compactMode;

    if(mode !== undefined) {
      compactMode += mode || config.trello.mode;
    }

    return `
    <blockquote class=${compactMode ? "trello-card-compact" : "trello-card"}>
    <a href="${url}">Trello Card</a>
    </blockquote>
    `;
  };

  return renderTrello;
};
