import st from './Button.module.scss'

const Buttons = ({ item, onClick }) => {
	return (
		<button className={st.root} onClick={() => onClick(item)}>
			{item}
		</button>
	)
}

export default Buttons
