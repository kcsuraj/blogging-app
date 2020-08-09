import React, { FC } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { RenderRoutes } from './routes'
import { Navbar } from './components'
// import { setName } from './modules/auth/store'
// import { AppState } from './store'

const App: FC = () => {
  // const { name } = useSelector((state: AppState) => state.auth)
  // const authDispatch = useDispatch()

  // const changeName = () => {
  //   authDispatch(setName('testing'))
  // }

  return (
    <div>
      {/* <button onClick={changeName}>Change name</button>
      Hello {name} */}
      <Navbar />
      <RenderRoutes />
    </div>
  )
}

export default App
