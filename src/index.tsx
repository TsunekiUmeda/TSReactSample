import React from 'react'
import ReactDOM from 'react-dom'
interface AppProps {
  color?: string
}

interface AppState {
  counter: number
}

class App extends React.Component<AppProps, AppState> {
  //this work without AppState interface
  // state = { counter: 0 }

  constructor(props: AppProps) {
    super(props)

    //This wont work without second AppState interface
    this.state = { counter: 0 }
  }

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 })
  }
  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))
