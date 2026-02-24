import Header from "./features/layout/components/Header"
import Content from "./features/layout/components/Content"
import Footer from "./features/layout/components/Footer"
import { Props } from "./features/layout/components/Props"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          
          <Route path="/props" element={<Props />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}