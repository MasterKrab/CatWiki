import { Transition } from 'react-transition-group'

const duration = 300

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0
}

const transitionStyles: {
	[key: string]: {
		opacity: number
	}
} = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 }
}

const Fade = ({ in: inProp, children }) => (
	<Transition in={inProp} timeout={duration}>
		{(state: string) => (
			<div
				style={{
					...defaultStyle,
					...transitionStyles[state]
				}}
			>
				{children}
			</div>
		)}
	</Transition>
)

export default Fade
