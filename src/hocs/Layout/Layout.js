import React from 'react';
import Aux from '../Auxi/Auxi';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDraw from '../../components/Navigation/SideDraw/SideDraw';


class Layout extends React.Component {

  state = {
    showSideDraw: false
  };

  sideDrawCloseHandler = () => {
    this.setState({ showSideDraw: false });
  }

  toggleSideDraw = () => {
    this.setState((prev) => ({
      showSideDraw: !prev.showSideDraw
    }))
  }


  render() {
    return (
      <Aux>
        <Toolbar toggle={this.toggleSideDraw} />
        <SideDraw open={this.state.showSideDraw} closed={this.sideDrawCloseHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    )
  }
}
export default Layout;