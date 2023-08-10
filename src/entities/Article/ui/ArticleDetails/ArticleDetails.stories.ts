import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import { type Article, ArticleBlockType, ArticleType } from '@entities/Article/model/types/article';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';

const articleData: Article = {
  id: '1',
  title: 'Javasript news',
  subtitle: 'Что нового в JS за 2023 год?',
  img: 'data:image/png;base64,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',
  views: 1022,
  createdAt: '26.02.2023',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта'
    },
    {
      id: '3',
      type: ArticleBlockType.CODE,
      code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);'
    },
    {
      id: '7',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '8',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта'
    },
    {
      id: '9',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.'
      ]
    }
  ]
};

const meta: Meta<typeof ArticleDetails> = {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  args: {
    article: articleData
  }
};

export default meta;

type Story = StoryObj<typeof ArticleDetails>;

export const DefaultLight: Story = {
  name: 'article (light)'
};

export const DefaultDark: Story = {
  name: 'article (dark)',
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const DefaultOrange: Story = {
  name: 'article (orange)',
  decorators: [ThemeDecorator(Theme.ORANGE)]
};
