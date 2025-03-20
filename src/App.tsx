import {QueryClientProvider} from "@tanstack/react-query"
import {queryClient} from "./lib/react-query.ts";
import {RouterProvider} from "react-router-dom"
import {router} from "./routes.tsx";
import './index.css'
import {AuthProvider} from "./contexts/AuthContext.tsx";

function App() {


  return (
      <AuthProvider>
          <QueryClientProvider client={queryClient}>
              <RouterProvider router={router}/>
          </QueryClientProvider>
      </AuthProvider>
  )
}

export default App
