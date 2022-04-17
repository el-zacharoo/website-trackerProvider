import React, { Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import * as prismic from "@prismicio/client";
import { PrismicProvider } from "@prismicio/react";
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Outline } from '@/components/Outline';
import { theme } from '@/theme';
import Home from '@/views';
import Viewport from '@/Viewport';

const endpoint = prismic.getEndpoint("zachs-website");
const client = prismic.createClient(endpoint);

console.log(endpoint)

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrismicProvider client={client}  >
        <Router>
          <Viewport>
            <Suspense fallback={<Outline visible={true} />}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/:uid" element={<Home />} />
              </Routes>
            </Suspense>
          </Viewport>
        </Router>
      </PrismicProvider>
    </ThemeProvider>
  )
}

export default App
