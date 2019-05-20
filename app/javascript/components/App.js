import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Tasks from './Tasks'
import About from './About'

class App extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Tasks} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </div>
        )
    }
}

export default App