import Page from '../components/Page'
import SiteHeader from '../components/SiteHeader'
import '../styles/index.scss'

const IndexPage = () => (
  <Page
    title="graphql-react examples"
    description="This Next.js web app demonstrates server side rendering and functionality of the graphql-react and next-graphql-react npm packages."
  >
    <SiteHeader />
  </Page>
)

export default IndexPage
