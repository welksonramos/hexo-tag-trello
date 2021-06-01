"use strict";

module.exports = hexo => () => {
  const js = hexo.extend.helper.get("js").bind(hexo);
  return js("https://p.trellocdn.com/embed.min.js");
};
