import css from 'styled-jsx/css'

const noVerticalScroll = css.global`
	body,
	html {
		max-height: 100vh;
		overflow-y: hidden;
	}
`

export default noVerticalScroll
