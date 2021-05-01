module.exports = hexo => {
  const renderTrello = args => {
    const { config } = hexo.trello;
    const [ url, mode ] = args;
    const compactMode = mode || config.mode;

    return `
    <blockquote class="${compactMode} ? trello-card-compact : trello-card">
    <a href="${url}">Trello Card</a>
  </blockquote>
    `;
  };

  return renderTrello;
};
