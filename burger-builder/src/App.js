import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/Burger-Builder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <div>
        <p>Hello</p>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
      );
  }
}
export default App;
