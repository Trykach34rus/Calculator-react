import { useState } from 'react'
import Button from '../Button/Button'
import Display from '../Display/Display'
import st from './Calculator.module.scss'

const buttons = [
	'1',
	'2',
	'3',
	'+',
	'4',
	'5',
	'6',
	'-',
	'7',
	'8',
	'9',
	'C',
	'0',
	'*',
	'/',
	'=',
]

function Calculator() {
	const [input, setInput] = useState('')
	const [res, setRes] = useState('')

	const buttonsCheck = item => {
		item === '='
			? (setRes(eval(input)), setInput(''))
			: item === 'C'
			? (setInput(''), setRes(''))
			: setInput(input + item)
	}

	return (
		<div className={st.root}>
			<Display value={input || res} />
			<div className={st.buttons}>
				{buttons.map(item => (
					<Button key={item} item={item} onClick={buttonsCheck} />
				))}
			</div>
		</div>
	)
}
export default Calculator
