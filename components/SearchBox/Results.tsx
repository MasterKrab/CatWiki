import type Result from 'types/result'
import Link from 'next/link'
import resetList from 'styles/resetList'
import classNames from 'classnames'

interface ResultsProps {
	results: Result[]
	isModal?: boolean
}

const Results = ({ results, isModal }: ResultsProps) => (
	<>
		<div
			className={classNames({
				results: true,
				'results--modal': isModal
			})}
		>
			<ul
				className={classNames({
					results__list: true,
					'results__list--modal': isModal
				})}
			>
				{results.map(({ id, name }) => (
					<li key={`result-${id}`} className="results__item">
						<Link href={`/breed/${name}`}>
							<a className="results__link">{name}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
		<style jsx>{resetList}</style>
		<style jsx>{`
			.results {
				position: absolute;
				z-index: 100000000;
				background-color: var(--secondary-color);
				width: 100%;
				margin-top: 1.047rem;
				padding: 1.764rem 0.706rem;
				font-size: 1.125rem;
				border-radius: 1.5rem;
			}

			.results--modal {
				position: static;
				margin-top: 0;
				padding-left: 0;
				padding-right: 0;
			}

			.results__list {
				max-height: 13.733rem;
				overflow-y: auto;
			}

			.results__list--modal {
				max-height: calc(100vh - 10.5rem);
			}

			.results__list::-webkit-scrollbar {
				width: 0.267rem;
			}

			.results__list::-webkit-scrollbar-track {
				background-color: var(--scrollbar-track-color);
			}

			.results__list::-webkit-scrollbar-thumb {
				background-color: var(--scrollbar-thumb-color);
			}

			.results__item {
				height: 3.51rem;
				transition: background-color 0.2s ease-in-out;
			}

			.results__link {
				display: flex;
				align-items: center;
				width: 100%;
				height: 100%;
				padding-left: 0.573rem;
				padding-right: 0.573rem;
				text-decoration: none;
				color: var(--primary-color);
				border-radius: 0.75rem;
			}

			@media (hover: hover) {
				.results__link:hover {
					background-color: var(--secondary-color-dark);
				}
			}

			.results__link:focus-visible {
				background-color: var(--secondary-color-dark);
			}
		`}</style>
	</>
)

export default Results
