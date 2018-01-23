import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { Container, Label, Menu, Image } from "semantic-ui-react";
import { MenuProps } from "../Menu";
import * as logo from "../../images/logo-transparent.svg";
import * as isologo from "../../images/isologo.svg";
import * as Styles from "./HeaderMenu.styles";
import './HeaderMenu.animations.css';

interface HeaderMenuProps extends MenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
  isAnimate?: boolean;
}

interface HeaderMenuState {
  menuClass: string;
  logoClass: string;
  isFullWindow: boolean;
}

export class HeaderMenu extends React.Component<HeaderMenuProps> {

  state = {
    menuClass: this.props.isAnimate ? Styles.fullMenuWindow : '',
    logoClass: this.props.isAnimate ? Styles.biggLogo : Styles.smallLogo,
    isFullWindow: this.props.isAnimate
  }

  scroll = {};  

  componentDidMount() {
    if (this.props.isAnimate) { this.setAnimation(); }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.resizeMenuOnScroll);
  }
  
  setAnimation = () => {    
    window.addEventListener('scroll', this.resizeMenuOnScroll);
  }

  resizeMenuOnScroll = () => {
    const scrolling = window.pageYOffset || document.documentElement.scrollTop;
    const firstKeyFrame = 5;
    let menuClass = '';
    let logoClass = '';
    let isFullWindow = true;
    if (scrolling > firstKeyFrame && this.state.menuClass !== `${Styles.smallMenuWindow}`) {
      logoClass = `${Styles.smallLogo}`;
      menuClass = `${Styles.smallMenuWindow}`;
      isFullWindow = false;
    }
    if (Boolean(menuClass)) { this.setState({menuClass, logoClass, isFullWindow}); }
  }

  handleMenu = () => this.props.dispatch(toggleSidebar());

  render() {
    const { items, pathname, Link, inverted, dispatch } = this.props;
    return (
      <Container>
        <Menu
          size="large"
          pointing
          inverted={true}
          borderless={true}
          id="animated-menu"
          className={`animated-menu ${Styles.menu} ${this.state.menuClass}`}
        >
          <Menu.Item as="a" className={`mobile only ${Styles.menuItem}`} id="about" icon="sidebar" onClick={this.handleMenu} />
          {items.map(item => {
            const active = item.exact ? pathname === item.path : pathname.startsWith(item.path);
            const homeActive = this.props.isAnimate && item.path === '/#about'
            return <Menu.Item
              as={Link}
              className={`mobile hidden ${Styles.menuItem}`}
              name={item.name}
              to={item.path}
              key={item.path}
              active={active || homeActive}
            />;
          })}
          <Image
            src={this.state.isFullWindow ? logo : isologo}
            className={`${Styles.logo} ${this.state.logoClass}`}
          />
          <Menu.Menu position="right" >
            <Menu.Item as="a" id="instagram" className={`${Styles.menuItem}`} icon="instagram" href="https://www.instagram.com/josuedevmark/" target="_blank" />
            <Menu.Item as="a" id="github" className={`${Styles.menuItem}`} icon="github" href="https://github.com/josueDevMark/" target="_blank" />
            <Menu.Item as="a" id="twitter" className={`${Styles.menuItem}`} icon="twitter" href="https://twitter.com/JosueDevMark" target="_blank" />
            <Menu.Item as="a" id="mail" className={`${Styles.menuItem}`} icon="mail outline" href="mailto:hello@josuedevmark.pro" target="_blank" />
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
};

export default connect()(HeaderMenu);
