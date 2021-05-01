# hexo-tag-trello
Display Trello cards in your Hexo blog


## Install
In your blog folder, add this npm dependency to your project

```
$ npm i hexo-tag-trello --save
```

## Including JS

To embedding cards on a single page, your only need to include the script tag once before a tag ```</body>``` 

```js
<script src="https://p.trellocdn.com/embed.min.js"></script>

```
## Usage

```
{% trello url | mode %}
```

## Options

| name | Description | Required | Values | Default |
 ------ | ---------- | -------- | ------- | ------- |
| `url`  | The URL from trello card | true | Undefined | Undefined
| `mode` | The mode for embedded Trello card | false | default/compact | default

# Example

There are two modes for embedded Trello cards. The default, `interactive mode`, which depending on the viewing members permissions will allow folks to vote on, watch / unwatch, join / leave, and even comment on the card:

Default (interactive mode): 
```
{% trelo https://trello.com/b/wl0iv8lY %}
``` 
As well as the non-interactive, `compact` mode:

```
{% trelo https://trello.com/b/wl0iv8lY compact %}
```

## Configuration
You can configure default settings for displaying your Trello cards in ```_config.yml```

```yml
trello:
  compact: true

```
## License
© Licensed under the MIT License.
