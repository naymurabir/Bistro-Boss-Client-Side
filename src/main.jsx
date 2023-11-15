import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Pages/Providers/AuthProviders.jsx'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      < QueryClientProvider client={queryClient} >
        <AuthProviders>
          <RouterProvider router={router}></RouterProvider>
        </AuthProviders>
      </QueryClientProvider >
    </HelmetProvider>
  </React.StrictMode>
)
