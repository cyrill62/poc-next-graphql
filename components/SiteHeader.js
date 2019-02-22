import {
  Grid,
  GridCol
} from '@kisskissbankbank/kitten/src/components/grid/grid'
import {
  Header,
  HeaderItems,
  HeaderItem
} from '@kisskissbankbank/kitten/src/components/headers/header'
import { Link } from '../routes'

const SiteHeader = () => (
  <Grid>
    <GridCol col="12">
      <Header id="header">
        <HeaderItems>
          <HeaderItem tag="nav" className="k-Header__nav">
            <ul className="k-HorizontalNav" role="menubar">
              <li className="k-HorizontalNav__element" role="menuitem">
                <Link route="subscribe">
                  <a className="k-HorizontalNav__item k-Header__nav__item">
                    Subscribe
                  </a>
                </Link>
              </li>
              <li className="k-HorizontalNav__element" role="menuitem">
                <Link route="unsubscribe">
                  <a className="k-HorizontalNav__item k-Header__nav__item">
                    Unubscribe
                  </a>
                </Link>
              </li>
              <li className="k-HorizontalNav__element" role="menuitem">
                <Link route="newsletters">
                  <a className="k-HorizontalNav__item k-Header__nav__item">
                    Our last Newsletters
                  </a>
                </Link>
              </li>
            </ul>
          </HeaderItem>
        </HeaderItems>
      </Header>
    </GridCol>
  </Grid>
)

export default SiteHeader
