import { LinkBox } from '@kisskissbankbank/kitten/src/components/box/link-box'
import { Marger } from '@kisskissbankbank/kitten/src/components/layout/marger'
import React, { PureComponent } from 'react'

class ListItem extends PureComponent {
  render() {
    const link = '/newsletters/' + this.props.uuid
    return (
      <Marger top="2" bottom="2">
        <LinkBox
          title={this.props.object}
          text={this.props.sendAt}
          href={link}
        />
      </Marger>
    )
  }
}

export default ListItem
