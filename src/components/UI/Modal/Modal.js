import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hocs/Auxi/Auxi';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.show !== nextProps.show || this.props.children !== nextProps.children;
  }

  componentWillUpdate() {
    console.log('Will update');
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            opacity: this.props.show ? '1' : '0',
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}


export default Modal;

/* TODO: use for functional components */
// export default React.memo(Modal, (this.props, nextthis.Props) => this.props.show === nextthis.Props.show);