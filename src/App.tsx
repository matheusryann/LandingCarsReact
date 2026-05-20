import Header from './components/Header'
import Main from './components/Main'
import SideBar from './components/SideBar'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-shell">
      <SideBar />
      <div className="app-main">
        <Header />
        <main className="app-main__content">
          <Main />
        </main>
        <Footer />
      </div>
  
    </div>
  )
}

export default App
