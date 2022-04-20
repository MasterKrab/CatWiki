import css from 'styled-jsx/css'

const formStyles = css`
	.form {
		position: relative;
		width: 27%;
		min-width: 5.726rem;
		color: var(--cuaternary-color);
	}

	@media screen and (min-width: 48rem) {
		.form {
			width: 31%;
			min-width: 21.875rem;
		}
	}

	.search-box {
		display: grid;
		grid-template-columns: 1fr 1.5rem;
		height: 1.919rem;
	}

	@media screen and (min-width: 48rem) {
		.search-box {
			height: 4.354rem;
			grid-template-columns: 1fr 4.5rem;
		}
	}

	.search-box__input {
		background-color: var(--secondary-color);
		font-size: 0.75rem;
		padding-top: 0.452rem;
		padding-left: 0.831rem;
		padding-bottom: 0.452rem;
		width: 100%;
		color: inherit;
		border: none;
		border-top-left-radius: 3.688rem;
		border-bottom-left-radius: 3.688rem;
	}

	.search-box__input::-webkit-search-cancel-button {
		display: none;
	}

	@media screen and (min-width: 48rem) {
		.search-box__input {
			padding: 1.489rem 1.788rem;
			font-size: 1.125rem;
		}
	}

	.search-box__input::placeholder {
		font-weight: 600;
		color: var(--cuaternary-color);
	}

	.search-box__submit {
		display: grid;
		place-items: center;
		background-color: var(--secondary-color);
		padding-left: 0.15rem;
		padding-right: 0.696rem;
		color: var(--primary-color);
		border-top-right-radius: 3.688rem;
		border-bottom-right-radius: 3.688rem;
	}

	@media screen and (min-width: 48rem) {
		.search-box__submit {
			padding-left: 1.674rem;
			padding-right: 1.674rem;
		}

		.search-box__submit > :global(svg) {
			width: 1.066rem;
			height: 1.066rem;
		}
	}

	.search-box__submit > :global(svg) {
		width: 0.666rem;
		height: 0.666rem;
	}

	@media screen and (min-width: 48rem) {
		.search-box__submit > :global(svg) {
			width: 1.066rem;
			height: 1.066rem;
		}
	}

	.form--modal {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
		background-color: var(--secondary-color);
		padding: 0.438rem 1.188rem;
		width: 100vw;
		height: 100vh;
	}

	.form__close {
		display: grid;
		place-items: center;
		background-color: var(--secondary-color-dark);
		margin-left: auto;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.5rem;
	}

	.form__close > :global(svg) {
		width: 0.824rem;
		height: 0.775rem;
	}

	.search-box--modal {
		margin-top: 1.912rem;
		grid-template-columns: 1fr 4rem;
		height: 2.844rem;
		border: 2px solid var(--primary-color);
		border-radius: 3.688rem;
	}

	.search-box__input--modal {
		padding: 0.5rem 1.262rem;
		font-size: 1.125rem;
	}

	.search-box__submit--modal {
		padding-left: 1.309rem;
		padding-right: 1.309rem;
	}

	.search-box__submit--modal :global(svg) {
		width: 1.066rem;
		height: 1.066rem;
	}
`

export default formStyles
