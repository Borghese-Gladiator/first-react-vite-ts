import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function App() {
  return (
    
    <div className="flex justify-center  items-center h-screen">
      <HoverCard>
        <HoverCardTrigger>First Shadcn Component</HoverCardTrigger>
        <HoverCardContent>My first of many components</HoverCardContent>
      </HoverCard>
    </div>
  )
}

export default App
