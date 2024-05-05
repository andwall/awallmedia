import './App.css'
import Sidebar from './components/Sidebar'
import { ChakraUIProvider } from './theme/chakra-ui.provider'

function App() {

  return (
    <>
        <Sidebar/>
    </>
  )
}

function WrappedApp() {
  return (
    <ChakraUIProvider>
      <App />
    </ChakraUIProvider>
  );
}

export default WrappedApp 
