import "./App.css"
import Header from "./Header"
import Checkout from './Checkout'
import Login from "./Login"
import Home from "./Home"
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/checkout" element={[<Header />, <Checkout />]} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={[<Header />, <Home />, <Footer />]} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
