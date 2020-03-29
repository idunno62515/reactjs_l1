import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxi/Auxi';

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {

    state = {
      error: null
    };

    constructor() {
      super()
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      })
      this.responseInterceptor= axios.interceptors.response.use(res => res, err => {
        this.setState({ error: err });
      })
    }

    componentWillUnmount(){
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    // componentDidMount() {

    //   axios.interceptors.request.use(req => {
    //     this.setState({ error: null });
    //     return req;
    //   })
    //   axios.interceptors.response.use(res => res, err => {
    //     this.setState({ error: err });
    //   })

    // };

    errorComfirmHandler = () => {
      this.setState({
        error: null
      });
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorComfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent  {...this.props} />
        </Aux>
      );
    }
  };
};

export default WithErrorHandler;