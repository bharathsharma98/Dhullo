import React, { Component } from 'react';

import Toolbar from './components/UI/Toolbar/Toolbar'
import SideDrawer from './components/UI/SideDrawer/SideDrawer'
import Backdrop from './components/UI/Backdrop/Backdrop'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import About from './components/Pages/About/about'
import Home from './components/Pages/Home/Home'
import Contact from './components/Pages/ContactUs/contact'
import Services from './components/Pages/Services/services'
import SignUp from './components/Pages/SignUp/SignUp'

class App extends Component {

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    };

    render() {

        let backDrop;

        if (this.state.sideDrawerOpen) {
            backDrop = <Backdrop click={this.backdropClickHandler} />;
        }
        return (
            <Router>
                    <div style={{ height: '100%' }}>
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
                        {backDrop}
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/" exact component={Home} />
                        <Route path="/signUp" exact component={SignUp} />
                    </div>
            </Router>
        );
    }
}

export default App;