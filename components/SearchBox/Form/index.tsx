import type Result from 'types/result'
import { useState, useRef, FormEvent, FocusEvent } from 'react'
import { MdClose, MdSearch } from 'react-icons/md'
import Results from 'components/SearchBox/Results'
import useIsMobile from 'hooks/useIsMobile'
import resetButton from 'styles/resetButton'
import formStyles from './styles'
import ViewportNoVerticalScroll from 'components/ViewportNoVerticalScroll'
import classNames from 'classnames'

interface FormProps {
	onFocus?: (() => void) | null
	isModal?: boolean
	onCloseModal?: () => void
}

const Form = ({ onFocus, isModal = false, onCloseModal }: FormProps) => {
	const [results, setResults] = useState<Result[]>([])
	const [isFocus, setIsFocus] = useState(false)
	const form = useRef<HTMLFormElement>(null)
	const input = useRef<HTMLInputElement>(null)
	const isMobile = useIsMobile()

	const fetchResults = () => {
		const query = input.current?.value

		fetch(`/api/search?query=${query}`)
			.then((response) => response.json())
			.then(setResults)
			.catch(console.error)
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		fetchResults()
	}

	const handleFocus = () => {
		if (document.activeElement !== input.current) return

		setIsFocus(true)

		const query = input.current?.value

		!query && fetchResults()
	}

	const handleBlur = ({ relatedTarget }: FocusEvent) => {
		!form.current?.contains(relatedTarget) && setIsFocus(false)
	}

	const activeEvents = !isMobile || isModal

	return (
		<>
			<form
				ref={form}
				onFocus={onFocus || handleFocus}
				onBlur={handleBlur}
				className={classNames({
					form: true,
					'form--modal': isModal
				})}
				onSubmit={activeEvents ? handleSubmit : undefined}
				role="search"
			>
				{isModal && (
					<button
						onClick={onCloseModal}
						className="form__close"
						type="button"
						aria-label="Close search"
					>
						<MdClose aria-hidden="true" fill="#000" />
					</button>
				)}
				<div
					className={classNames({
						'search-box': true,
						'search-box--modal': isModal
					})}
				>
					<input
						className={classNames({
							'search-box__input': true,
							'search-box__input--modal': isModal
						})}
						ref={input}
						onChange={activeEvents ? fetchResults : undefined}
						type="search"
						aria-label="Search"
						placeholder="Search"
						autoComplete="off"
						aria-autocomplete="list"
						name="query"
						data-autofocus
					/>
					<button
						className={classNames({
							'search-box__submit': true,
							'search-box__submit--modal': isModal
						})}
						aria-label="Search"
					>
						<MdSearch aria-hidden="true" />
					</button>
				</div>
				{(isFocus || isModal) && results.length ? (
					<Results results={results} isModal={isModal} />
				) : null}
			</form>
			<style jsx>{resetButton}</style>
			<style jsx>{formStyles}</style>
			{isModal && <ViewportNoVerticalScroll />}
		</>
	)
}

export default Form
