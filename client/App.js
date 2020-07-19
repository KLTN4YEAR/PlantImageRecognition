import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Navigation from './src/navigation';
import AnimatedSplash from 'react-native-animated-splash-screen';

export default class App extends React.Component {
  state = {isLoaded: false};
  componentDidMount() {
    setTimeout(() => this.setState({isLoaded: true}), 3000);
  }
  render() {
    return (
      <AnimatedSplash
        translucent={true}
        isLoaded={this.state.isLoaded}
        logoImage={require('./src/public/images/logo_transparent.png')}
        backgroundColor={'#33CC08'}
        logoHeight={150}
        logoWidht={150}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </AnimatedSplash>
    );
  }
}
