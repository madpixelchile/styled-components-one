import React from 'react'
import ReactDOM from 'react-dom/client'
import { ComponentList } from './ComponentList.tsx'

import MainTheme from './components/ThemeProvider/MainTheme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MainTheme>
        <ComponentList/>
      </MainTheme>
  </React.StrictMode>,
)

