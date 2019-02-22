import { Button } from '@kisskissbankbank/kitten/src/components/buttons/button'
import { FormActions } from '@kisskissbankbank/kitten/src/components/form/form-actions'
import { FormRow } from '@kisskissbankbank/kitten/src/components/form/form-row'
import { Label } from '@kisskissbankbank/kitten/src/components/form/label'
import { TextInput } from '@kisskissbankbank/kitten/src/components/form/text-input'
import { Container } from '@kisskissbankbank/kitten/src/components/grid/container'
import { GridCol } from '@kisskissbankbank/kitten/src/components/grid/grid'
import { Title } from '@kisskissbankbank/kitten/src/components/typography/title'
import Page from '../components/Page'
import SiteHeader from '../components/SiteHeader'
import '../styles/index.scss'

const Form = () => (
  <>
    <GridCol col="6" offset="4">
      <Title>Subscribe to our newsletter</Title>
    </GridCol>
    <GridCol col="3" offset="5">
      <Container>
        <form>
          <FormRow>
            <Label>
              Nom
              <TextInput name="lastName" placeholder="Nom" />
            </Label>
          </FormRow>
          <FormRow>
            <Label>
              Prénom
              <TextInput name="firstName" placeholder="Prénom" />
            </Label>
          </FormRow>
          <FormRow>
            <Label>
              Email
              <TextInput name="email" placeholder="Email" />
            </Label>
          </FormRow>
          <FormActions>
            <Button tag="button" modifier="helium">
              Sʼinscrire
            </Button>
          </FormActions>
        </form>
      </Container>
    </GridCol>
  </>
)

const IndexPage = () => (
  <Page
    title="graphql-react examples"
    description="This Next.js web app demonstrates server side rendering and functionality of the graphql-react and next-graphql-react npm packages."
  >
    <SiteHeader />
    <Form />
  </Page>
)

export default IndexPage
