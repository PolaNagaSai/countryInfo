
import Headers from '../Headers/Headers'
import Footers from '../Footers/Footers'
import { Outlet } from 'react-router-dom'

function AppLayOut() {
  return (
    <>
    <Headers/>
    <Outlet/>
    <Footers/>
    </>
  )
}

export default AppLayOut