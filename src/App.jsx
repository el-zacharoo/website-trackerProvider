import React, { Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Outline } from '@/components/Outline';
import { theme } from '@/theme';
import Home from '@/views';
import Viewport from '@/Viewport';
import { Provider } from '@/components/Provider'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Viewport>
          <Suspense fallback={<Outline visible={true} />}>
            <Provider>
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
            </Provider>
          </Suspense>
        </Viewport>
      </Router>
    </ThemeProvider>
  )
}

export default App
