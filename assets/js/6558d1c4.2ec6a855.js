"use strict";(self.webpackChunkwbfe_blog=self.webpackChunkwbfe_blog||[]).push([[8515],{8012:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"css-flex-grid","metadata":{"permalink":"/wbfe-blog/blog/css-flex-grid","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-24-css-flex-grid.md","source":"@site/blog/2022-05-24-css-flex-grid.md","title":"CSS Flex & Grid","description":"Flex","date":"2022-05-24T00:00:00.000Z","formattedDate":"May 24, 2022","tags":[{"label":"css","permalink":"/wbfe-blog/blog/tags/css"},{"label":"flex","permalink":"/wbfe-blog/blog/tags/flex"},{"label":"grid","permalink":"/wbfe-blog/blog/tags/grid"}],"readingTime":3.14,"truncated":false,"authors":[{"name":"Stefan You","title":"Front End Developer","url":"https://github.com/eotkd4791","imageURL":"https://avatars.githubusercontent.com/u/46208349?v=4","key":"stefan"}],"frontMatter":{"slug":"css-flex-grid","title":"CSS Flex & Grid","authors":["stefan"],"tags":["css","flex","grid"]},"nextItem":{"title":"\uc640\uc774\uc5b4 \ubc14\uc54c\ub9ac \ud504\ub860\ud2b8\uc5d4\ub4dc\ud300\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.","permalink":"/wbfe-blog/blog/introduce"}},"content":"## Flex\\n\\n:::tip\\n\\n\ucee8\ud150\uce20\uc758 \ub192\uc774 \ub9cc\ud07c\ub9cc height\ub97c \uc124\uc815\ud558\ub294 float\uc640 \ub2e4\ub974\uac8c flex\ub294 flex items\ub4e4 \ub07c\ub9ac \uac19\uc740 \ub192\uc774\ub97c \uc720\uc9c0\ud55c\ub2e4.\\n\\n:::\\n\\n1. flex vs inline-flex\\n\\n- flex container\uac00 block\uc778\uc9c0 inine\uc778\uc9c0 \uc124\uc815\\n\\n```css\\n.flex-container {\\n  display: flex;\\n  /* display: inline-flex; */\\n}\\n```\\n\\n2. flex-wrap\\n\\n- \ucee8\ud14c\uc774\ud130\ubcf4\ub2e4 \uc544\uc774\ud15c\ub4e4\uc758 \uba54\uc778\ucd95 \ubc29\ud5a5\uc758 \ud06c\uae30\uac00 \ucee4\uc84c\uc744 \uacbd\uc6b0\uc5d0 \uc904\ubc14\uafc8 \uc5ec\ubd80 \uc124\uc815\\n- \uae30\ubcf8\uac12: nowrap - \uc904\ubc14\uafc8 \ud558\uc9c0 \uc54a\uc74c\\n- wrap: \uc904\ubc14\uafc8\\n\\n```css\\n.flex-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  /* flex-wrap: nowrap; */\\n}\\n```\\n\\n3. flex-flow\\n\\n- flex-direction + flex-wrap\\n- \uc608\uc2dc) `flex-flow: row wrap;`\\n\\n```css\\n.flex-container {\\n  flex-flow: row wrap;\\n}\\n```\\n\\n:::tip\\n\\n`flex-direction`: `row | column`\\n\\n- `\uba54\uc778\ucd95(main axis)`\uc758 \ubc29\ud5a5 \uc815\uc758\\n- `justify\uac00` \ub4e4\uc5b4\uac04 \uc18d\uc131\uc740 `\uba54\uc778\ucd95(main axis)`, `align`\uc774 \ub4e4\uc5b4\uac04 \uc18d\uc131\uc740 `\uc218\uc9c1\ucd95(cross axis)`\uc5d0 \ub300\ud55c \uc815\ub82c\uc744 \uc758\ubbf8\ud568\\n\\n:::\\n\\n4. justify-content (\uba54\uc778\ucd95 \ubc29\ud5a5 \uc815\ub82c)\\n\\n- flex-start (default)\\n- flex-end\\n- center\\n- space-between\\n- space-around\\n- space-evenly (IE, Edge x)\\n\\n5. align-items (\uc218\uc9c1\ucd95 \ubc29\ud5a5 \uc815\ub82c)\\n\\n- stretch (default)\\n- flex-start\\n- flex-end\\n- center\\n- baseline (text-baseline)\\n\\n6. align-content (\uc5ec\ub7ec \ud589 \uc815\ub82c)\\n\\n>\uc904\ubc14\ub01c\uc774 \uc77c\uc5b4\ub09c \uc0c1\ud669\uc5d0\uc11c \uc0ac\uc6a9 (flex-wrap: wrap)\\n\\n- stretch (default)\\n- flex-start\\n- flex-end\\n- center\\n- space-between\\n- space-around\\n- space-evenly\\n\\n7. flex-basis\\n\\n>flex-basis\ub294 flex\uc544\uc774\ud15c\uc758 \uae30\ubcf8 \ud06c\uae30\ub97c \uc124\uc815\ud568.\\n>flex-direction: row -> \ub108\ube44\\n>flex-direction: column -> \ub192\uc774\\n\\n```css\\n.item {\\n  flex-basis: 100px;\\n}\\n/* width\uac00 100px \uc774\ud558\uc778 item\ub4e4\uc740 100px\ub85c, 100px \uc774\uc0c1\uc778 item\ub4e4\uc740 \uadf8\ub300\ub85c \uc720\uc9c0  */\\n```\\n\\n:::tip\\n\\nwidth\ub97c 100px\ub85c \uc124\uc815\ud558\uba74 100px\uc774 \uc548\ub418\ub294 \uc544\uc774\ud15c\ub4e4, 100px\uc744 \ub118\ub294 \uc544\uc774\ud15c\ub4e4\ub3c4 \ubaa8\ub450 100px\ub85c \ub9de\ucdb0\uc9c4\ub2e4.\\n\\n:::\\n\\n8. flex-grow\\n\\n>\uc720\uc5f0\ud558\uac8c \ub298\ub9ac\uae30\\n>flex-grow\ub294 \uc544\uc774\ud15c\uc774 flex-basis\uc758 \uac12\ubcf4\ub2e4 \ucee4\uc9c8 \uc218 \uc788\ub294\uc9c0\ub97c \uacb0\uc815\ud558\ub294 \uc18d\uc131.\\n\\n```css\\n.item {\\n  flex-grow: 1;\\n  /* flex-grow: 0;  <default> */\\n}\\n```\\n\\n- flex-grow\uc5d0 \ub4e4\uc5b4\uac00\ub294 \uc22b\uc790\uc758 \uc758\ubbf8\ub294 \uc544\uc774\ud15c\ub4e4\uc758 flex-basis\ub97c \uc81c\uc678\ud55c \uc5ec\ubc31 \ubd80\ubd84\uc744 `flex-grow\uc5d0 \uc9c0\uc815\ub41c \uc22b\uc790\uc758 \ube44\uc728`\ub85c \ub098\ub204\uc5b4 \uac00\uc9c4\ub2e4.\\n\\n```css\\n.item:first-child {\\n  flex-grow: 1;\\n}\\n\\n.item:nth-child(2) {\\n  flex-grow: 3;\\n}\\n\\n/* \uccab\ubc88\uc9f8 \uc790\uc2dd\uc758 \ucee8\ud150\uce20\ub97c \uc81c\uc678\ud55c \uc5ec\ubc31\uc744 1\ub9cc\ud07c\uc758 \ube44\uc728, \ub450\ubc88\uca30 \uc790\uc2dd\uc758 \ucee8\ud150\uce20\ub97c \uc81c\uc678\ud55c \uc5ec\ubc31\uc744 3\ub9cc\ud07c\uc758 \ube44\uc728\ub85c \ub298\ub9b0\ub2e4. */\\n```\\n\\n9. flex-shrink\\n\\n>\uc720\uc5f0\ud558\uac8c \uc904\uc774\uae30\\n>flex-shrink \uc544\uc774\ud15c\uc774 flex-basis\uc758 \uac12\ubcf4\ub2e4 \uc791\uc544\uc9c8 \uc218 \uc788\ub294\uc9c0\ub97c \uacb0\uc815\ud558\ub294 \uc18d\uc131.\\n\\n```css\\n.item {\\n  flex-shrink: 1; /* <default> */\\n}\\n```\\n\\n```css\\n.item {\\n  flex-shrink: 0; /* \uc548 \uc904\uc5b4\ub4e4\uac8c \ud558\uae30 */\\n}\\n```\\n\\n:::tip\\n\\nflex-basis, flex-grow, flex-shrink\ub294 \uac19\uc774 \ub2e4\ub2c8\ub294 \uc138\ud2b8\uc774\ub2e4. \ub530\ub77c\uc11c \uc14b\uc744 \ud568\uaed8 \ucd95\uc57d\ud615\uc73c\ub85c \uc815\uc758\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.\\n\\n:::\\n\\n## Grid\\n\\n... \uc791\uc131\uc911 ..."},{"id":"introduce","metadata":{"permalink":"/wbfe-blog/blog/introduce","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-06-introduce.md","source":"@site/blog/2022-05-06-introduce.md","title":"\uc640\uc774\uc5b4 \ubc14\uc54c\ub9ac \ud504\ub860\ud2b8\uc5d4\ub4dc\ud300\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.","description":"1. Roy","date":"2022-05-06T00:00:00.000Z","formattedDate":"May 6, 2022","tags":[{"label":"member","permalink":"/wbfe-blog/blog/tags/member"},{"label":"frontend","permalink":"/wbfe-blog/blog/tags/frontend"}],"readingTime":0.285,"truncated":false,"authors":[{"name":"Gray Kwon","title":"Front End Developer","url":"https://github.com/zerochae","imageURL":"https://avatars.githubusercontent.com/u/84373490?v=4","key":"gray"}],"frontMatter":{"slug":"introduce","title":"\uc640\uc774\uc5b4 \ubc14\uc54c\ub9ac \ud504\ub860\ud2b8\uc5d4\ub4dc\ud300\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.","authors":["gray"],"tags":["member","frontend"]},"prevItem":{"title":"CSS Flex & Grid","permalink":"/wbfe-blog/blog/css-flex-grid"},"nextItem":{"title":"Welcome","permalink":"/wbfe-blog/blog/welcome"}},"content":"1. Roy\\n\\n- `\ube44\ubc00\ubc88\ud638 \ubb50\uc600\uc9c0?`\uc758 \uac1c\ubc1c\uc790\\n- Apple store \ub9ac\ubdf0 3.7\ucc9c\uac1c \ub4f1\ub85d\\n\\n2. Stefan\\n\\n- \ub2e4\uc7ac\ub2e4\ub2a5 \ubaa8\ub974\ub294\uac8c \uc5c6\ub294 \uac1c\ubc1c\uc790\\n- Git\uc5d0 \ub300\ud574 \ubaa8\ub974\ub294\uac8c \uc5c6\uc74c\\n\\n3. Gray\\n\\n- \uc811\ub2c8\ub2e4 \u314e\u314e"},{"id":"welcome","metadata":{"permalink":"/wbfe-blog/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/wbfe-blog/blog/tags/facebook"},{"label":"hello","permalink":"/wbfe-blog/blog/tags/hello"},{"label":"docusaurus","permalink":"/wbfe-blog/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"\uc640\uc774\uc5b4 \ubc14\uc54c\ub9ac \ud504\ub860\ud2b8\uc5d4\ub4dc\ud300\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.","permalink":"/wbfe-blog/blog/introduce"},"nextItem":{"title":"MDX Blog Post","permalink":"/wbfe-blog/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/wbfe-blog/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/wbfe-blog/blog/tags/docusaurus"}],"readingTime":0.175,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/wbfe-blog/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/wbfe-blog/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/wbfe-blog/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/wbfe-blog/blog/tags/hello"},{"label":"docusaurus","permalink":"/wbfe-blog/blog/tags/docusaurus"}],"readingTime":2.05,"truncated":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/wbfe-blog/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/wbfe-blog/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/wbfe-blog/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/wbfe-blog/blog/tags/hola"},{"label":"docusaurus","permalink":"/wbfe-blog/blog/tags/docusaurus"}],"readingTime":0.12,"truncated":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/wbfe-blog/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);