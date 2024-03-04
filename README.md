# 📚 Bookledge landing page project 📕📗📘📙
Main developer GitHub account: [igor-h](https://github.com/igor-h) <img src="https://avatars.githubusercontent.com/u/39650812?v=4" width="32px;" alt=""/>

## 🤓  Getting Started steps:

- Setup your [sendgrid](https://sendgrid.com/) API key and add it to environment variables (`SENDGRID_API_KEY` - `.env.local`)
- Adjust the template to your needs (and checkout `env.ts` file)
- Deploy the project on [Vercel](https://vercel.com/) **don't forget to add env variables**
- _(optional)_ Create [Tina Cloud account](https://app.tina.io/), [a project](https://tina.io/docs/tina-cloud/) and fill these `NEXT_PUBLIC_ORGANIZATION_NAME`, `NEXT_PUBLIC_TINA_CLIENT_ID` env vars with proper values
  > Tina's Content API authenticates directly with GitHub removing the need for users to create GitHub accounts. Access is granted through the dashboard, allowing users to login directly through your site and begin editing! Any changes that are saved by your editors will be commited to the configured branch in your GitHub repository.
  - For more details [see the docs](https://tina.io/docs/tina-cloud/)

```
# run the dev mode
$ yarn dev

# run the prod mode
yarn start

# build the app
yarn build
```

> Hint: To edit the blog pages go to [/admin](http://localhost:3000/admin) and navigate to a blog page to edit it. To exit editing mode navigate to [/admin/logout](http://localhost:3000/admin/logout)

## 🧰 Built With

- Statically generated pages with [**Next.js** ](https://github.com/vercel/next.js)
- [Styled components](https://github.com/styled-components/styled-components/)
- [MDX](https://github.com/mdx-js/mdx)
- [TypeScript](https://github.com/Microsoft/TypeScript)

##  Libraries used in the Bookledge project:

- https://github.com/neg4n/next-api-og-image - generating open graph images
- https://github.com/blazity/nextjs-color-mode - non-flickering dark mode
- https://github.com/Brew-Brew/css-in-js-media - a convenient way of creating media queries

## ✨ Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bstefanski.com/"><img src="https://avatars.githubusercontent.com/u/39650812?v=4" width="64px;" alt=""/><br /><sub><b>Igor Holovka</b></sub></a><br /><a href="https://github.com/igor-h" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->