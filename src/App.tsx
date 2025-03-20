import {QueryClientProvider} from "@tanstack/react-query"
import {queryClient} from "../lib/react-query.ts";
import {RouterProvider} from "react-router-dom"
import {router} from "./routes.tsx";
import './index.css'

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App
