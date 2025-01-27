import st from './Display.module.scss'

const Display = ({ value }) => {
	return <div className={st.root}>{value}</div>
}

export default Display
