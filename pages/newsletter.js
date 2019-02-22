import { GridCol } from '@kisskissbankbank/kitten/src/components/grid/grid'
import { Title } from '@kisskissbankbank/kitten/src/components/typography/title'
import { GraphQL, GraphQLContext, useGraphQL } from 'graphql-react'
import React from 'react'
import Errors from '../components/Errors'
import Loader from '../components/Loader'
import Page from '../components/Page'
import SiteHeader from '../components/SiteHeader'
import '../styles/index.scss'

const graphqlNLFetchOptionsOverride = options => {
  options.url = 'http://localhost:8081/graphql'
}

const FetchNewsletter = () => {
  const { load, loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: graphqlNLFetchOptionsOverride,
    operation: {
      query: /* GraphQL */ `
        {
          newsletter(uuid: ) {
            uuid
            object
            content
            sendAt
          }
        }
      `
    }
  })

  return (
    <>
      {data && <div>{data.newsletter.object}</div>}
      <Errors {...errors} />
      {loading && <Loader />}
      <button onClick={load}>reload</button>
    </>
  )
}

const graphql = new GraphQL()
const title = 'Show our last newsletters'

export default class NewsletterPage extends React.Component {
  static getInitialProps({ query }) {
    return query
  }

  render() {
    return (
      <Page title={title}>
        <SiteHeader />
        <GraphQLContext.Provider value={graphql}>
          <GridCol col="6" offset="4">
            <Title>{title}</Title>
          </GridCol>
          <FetchNewsletter />
        </GraphQLContext.Provider>
      </Page>
    )
  }
}
