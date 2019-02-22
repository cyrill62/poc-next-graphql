import { Container } from '@kisskissbankbank/kitten/src/components/grid/container'
import React, { PureComponent } from 'react'
import ListItem from './listItem'

class ListItems extends PureComponent {
  render() {
    const list = this.props.items.map(item => (
      <ListItem
        object={item.object}
        uuid={item.uuid}
        key={item.uuid}
        sendAt={item.sendAt}
      />
    ))

    return <Container>{list}</Container>
  }
}

export default ListItems
