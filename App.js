import React from 'react'
import SiteProvider from './src/components/Auth/context'
import Router from './src/components/Router'

export default function App() {
  return (
    <SiteProvider>
      <Router />
    </SiteProvider>
  )
}