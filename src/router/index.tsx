import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form1 from "../pages/form1"
import Form2 from "../pages/form2"
import Confirm from "../pages/confirm"
import Index from "../pages"
import Todo from "../pages/todo"

const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rooter
