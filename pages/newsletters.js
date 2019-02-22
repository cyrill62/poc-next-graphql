import '../styles/index.scss'

import { GridCol } from '@kisskissbankbank/kitten/src/components/grid/grid'
import { Title } from '@kisskissbankbank/kitten/src/components/typography/title'
import { GraphQL, GraphQLContext, useGraphQL } from 'graphql-react'
import Errors from '../components/Errors'
import Loader from '../components/Loader'
import ListItems from '../components/newsletters/listItems'
import Page from '../components/Page'
import SiteHeader from '../components/SiteHeader'

const graphqlNLFetchOptionsOverride = options => {
  options.url = 'http://localhost:8081/graphql'
}

const FetchNewsletters = () => {
  const { load, loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: graphqlNLFetchOptionsOverride,
    operation: {
      query: /* GraphQL */ `
        {
          newsletters {
            uuid
            object
            sendAt
          }
        }
      `
    }
  })

  return (
    <>
      {data && <ListItems items={data.newsletters} />}
      <Errors {...errors} />
      {loading && <Loader />}
      <button onClick={load}>reload</button>
    </>
  )
}

const graphql = new GraphQL()
const title = 'Show our last newsletters'

const NewslettersPage = () => (
  <Page title={title}>
    <SiteHeader />
    <GraphQLContext.Provider value={graphql}>
      <GridCol col="6" offset="4">
        <Title>{title}</Title>
      </GridCol>
      <FetchNewsletters />
    </GraphQLContext.Provider>
  </Page>
)

export default NewslettersPage
