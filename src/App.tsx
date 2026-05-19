import Header from './components/Header'
import Main from './components/Main'
import SideBar from './components/SideBar'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <SideBar />
      <div className="app-main">
        <Header />
        <main className="app-main__content">
          <Main />
        </main>
      </div>
    </div>
  )
}

export default App
