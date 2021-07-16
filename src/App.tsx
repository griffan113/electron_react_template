import * as React from 'react';

import { GlobalStyling } from './UI/GlobalStyle';
import "./UI/index.global.css"

import { Home } from './components/Home';

// This is an event call, see electron/bridge.ts to understand.
// This delay is used to prevent message printing before the browser is loaded.
setTimeout(() => window.Bridge.ping(), 0.500);

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyling />
      <Home />
    </>
  )
}