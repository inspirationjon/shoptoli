// import Private from './routes/Private'
import Public from './routes/Public'
import Navbar from './components/Navbar/'
import Home from './pages/Home'
import Filtered from './pages/Filtered'
import Orders from './pages/Orders'
import Settings from './pages/Settings'

function App() {
    return (
        <>
            <Navbar />
            <Public path='/' component={Home} exact />
            <Public path='/filtered' component={Filtered} exact />
            <Public path='/orders' component={Orders} exact />
            <Public path='/settings' component={Settings} exact />
        </>
    )
}

export default App
