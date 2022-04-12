import React, { Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Outline } from '@/components/Outline';
import { theme } from '@/theme';
import Home from '@/views';
import Viewport from '@/Viewport';
import { GeoProvider } from './components/Context'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Viewport>
          <Suspense fallback={<Outline visible={true} />}>
            <GeoProvider>
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
            </GeoProvider>
          </Suspense>
        </Viewport>
      </Router>

    </ThemeProvider>
  )
}

export default App
