import 'core-js/stable'
import 'regenerator-runtime/runtime'

import * as React from 'react'
import { render } from 'react-dom'

import TickyTacky from './components/TickyTacky'
import { unregister } from './serviceWorker'
import GlobalStyle from './styles'

render(
  <>
    <TickyTacky />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)

unregister()
