import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { Container, Label, Menu, Image } from "semantic-ui-react";
import { MenuProps } from "../Menu";
import { css } from 'glamor';
import * as logo from "../../images/logo-transparent.svg";
import * as Styles from "./HeaderMenu.styles";

interface HeaderMenuProps extends MenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
}

export class HeaderMenu extends React.Component<HeaderMenuProps> {

  handleMenu = () => this.props.dispatch(toggleSidebar());

  render() {
    const { items, pathname, Link, inverted, dispatch } = this.props;

    return (
      <Container>
        <Menu
          size="large"
          pointing
          secondary
          inverted={inverted}
          className={`${Styles.header}`}
          borderless={true}
        >
          <Menu.Item as="a" className="mobile only" id="about" icon="sidebar" onClick={this.handleMenu} />
          {items.map(item => {
            const active = item.exact ? pathname === item.path : pathname.startsWith(item.path);
            return <Menu.Item
              as={Link}
              className="mobile hidden"
              name={item.name}
              to={item.path}
              key={item.path}
              active={active}
            />;
          })}
          <Image src={logo} />
        </Menu>
      </Container>
    );
  }
};

export default connect()(HeaderMenu);
