export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee8b258fb02fa7d076ffc8e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vihn1xys',
                  apiId: '85543c8e-7651-44dc-a18a-15064b8cc01a'
                },
                {
                  buildHookId: '5ee8b258fb02faf09c6ff366',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-q4gkxp85',
                  apiId: 'b6a5153a-f38c-45e9-83f8-d573e9749f19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sixheads/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-q4gkxp85.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
