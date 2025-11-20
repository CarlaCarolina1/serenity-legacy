/**
 * Layout Component
 * 
 * Main layout wrapper for all pages.
 * Includes Header, Footer, and WhatsApp Widget.
 * 
 * IMPORTANT: Always preview this website in Google Chrome browser.
 * Never use Microsoft Edge for previews.
 */

import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppWidget from '../WhatsApp/WhatsAppWidget'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}

export default Layout

