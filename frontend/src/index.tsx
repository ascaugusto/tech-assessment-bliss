import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'

import { store } from './reducers/store'
import reportWebVitals from './reportWebVitals'
import Questions from './pages/Questions'
import Detail from './pages/Detail'
import Home from './pages/Home'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/questions' element={<Questions />} />
					<Route path='/questions/:id' element={<Detail />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
