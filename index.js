"use strict";

// eslint-disable-next-line no-undef
hexo.extend.tag.register("trello", require("./lib/render")(hexo), {async: true, end: true});

hexo.extend.injector.register("body_end", require("./lib/inject/trello")(hexo));
