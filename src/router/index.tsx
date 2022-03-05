import React, { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "../pages"
// import Form1 from "../pages/form1"
// import Form2 from "../pages/form2"
import Confirm from "../pages/confirm"
// import Todo from "../pages/todo"
// import Catalog from "../pages/catalog"
// import Camera from "../pages/camera"
import ConfirmLayout from "../pages/confirm-layout"
// import FileUpload from "../pages/file-upload"

const Form1 = lazy(() => import("../pages/form1"))
const Form2 = lazy(() => import("../pages/form2"))
const Todo = lazy(() => import("../pages/todo"))
const Camera = lazy(() => import("../pages/camera"))
const Catalog = lazy(() => import("../pages/catalog"))
const FileUpload = lazy(() => import("../pages/file-upload"))

const Rooter = () => {
  return (
    <Suspense fallback={<p>Page Loading...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/confirm-layout" element={<ConfirmLayout />} />
          <Route path="/file-upload" element={<FileUpload />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default Rooter
