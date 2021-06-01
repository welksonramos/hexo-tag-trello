"use strict";

// eslint-disable-next-line no-undef
hexo.extend.tag.register("trello", require("./lib/trello")(hexo), {async: true, end: true});

hexo.extend.injector.register("body_end", require("./lib/inject/trello")(hexo));
