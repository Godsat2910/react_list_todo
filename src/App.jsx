import { Fragment } from "react"
import Background from './components/Background'
import TasksContainer from './components/TasksContainer'
import GlobalStyle from './styles/global'

function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <Background>
          <TasksContainer />
      </Background>
  </Fragment>
     
  )
}

export default App
