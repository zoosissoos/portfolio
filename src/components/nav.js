import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state  

    return (  
      <Menu className="fixedNav" borderless inverted>
        <Menu.Item name='Home' href='#home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
        <Menu.Item name='About' href='#aboutme' active={activeItem === 'About'} onClick={this.handleItemClick} />
        <Menu.Item name='Portfolio' href='#portfolio' active={activeItem === 'Portfolio'} onClick={this.handleItemClick} />
        <Menu.Item name='Contact' href='#contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
      </Menu> 
    )
  }
}


export default Nav;

