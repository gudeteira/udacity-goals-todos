import React from 'react'
import {connect} from "react-redux"
import {handleInitialData} from "../actions/shared"
import '../App.css'
import ConnectedGoals from './Goals'
import ConnectedTodos from './Todos'


class App extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(handleInitialData())
  }

  render() {

    if (this.props.loading) {
      return <div className="App"><h1>Loading data</h1></div>
    }
    return (
      <div className="App-header">
        <ConnectedTodos/>
        <ConnectedGoals/>
      </div>
    )
  }
}

export default connect(state => ({
  loading: state.loading
}))(App)