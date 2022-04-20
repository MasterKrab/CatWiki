import type BreedImage from 'types/breed-image'
import Link from 'next/link'
import { MdArrowRightAlt } from 'react-icons/md'
import BreedItem from 'components/Home/BreedItem'
import resetList from 'styles/resetList'

interface HomeProps {
	breeds: BreedImage[]
}

const Breeds = ({ breeds }: HomeProps) => (
	<>
		<article className="breeds">
			<p className="breeds__pre-title">Most Searched Breeds</p>
			<h2 className="breeds__title">
				66+ Breeds For you <br /> to discover
			</h2>
			<Link href="/breeds">
				<a className="breeds__link">
					See more <MdArrowRightAlt aria-hidden="true" />
				</a>
			</Link>
			<ul className="breeds__list">
				{breeds.map((breed) => (
					<BreedItem key={`breed-${breed.id}`} {...breed} />
				))}
			</ul>
		</article>
		<style jsx>{resetList}</style>
		<style jsx>{`
			.breeds {
				display: grid;
				grid-template-columns: 1fr;
				background-color: var(--tertiary-color);
				padding: 1.137rem 1.813rem;
				color: var(--cuaternary-color);
				border-bottom-left-radius: 2.625rem;
				border-bottom-right-radius: 2.625rem;
			}

			@media screen and (min-width: 48rem) {
				.breeds {
					grid-template-columns: repeat(2, 1fr);
					padding: 2.5rem 6.75rem;
				}
			}

			.breeds__pre-title {
				position: relative;
				font-weight: 500;
				font-size: 0.75rem;
				margin-bottom: 1.628rem;
			}

			@media screen and (min-width: 48rem) {
				.breeds__pre-title {
					grid-column: span 2;
					font-size: 1.125rem;
				}
			}

			.breeds__pre-title::before {
				content: '';
				position: absolute;
				bottom: -0.361rem;
				left: 0;
				background-color: var(--cuaternary-color);
				width: 2.556rem;
				height: 0.188rem;
				border-radius: 4.813rem;
			}

			@media screen and (min-width: 48rem) {
				.breeds__pre-title::after {
					width: 3.699rem;
					height: 0.201rem;
				}
			}

			.breeds__title {
				font-size: 1.125rem;
				font-weight: 700;
				margin-top: 0;
				margin-bottom: 0;
			}

			@media screen and (min-width: 48rem) {
				.breeds__title {
					grid-column: span 2;
					font-size: 3rem;
				}
			}

			@media screen and (min-width: 76.25rem) {
				.breeds__title {
					grid-column: span 1;
				}
			}

			.breeds__link {
				display: none;
				align-items: center;
				gap: 0.5rem;
				margin-top: 1rem;
				font-size: 1.125rem;
				font-weight: 700;
				text-decoration: none;
				text-transform: uppercase;
				color: var(--cuaternary-color-light);
			}

			@media screen and (min-width: 48rem) {
				.breeds__link {
					display: flex;
				}
			}

			@media screen and (min-width: 76.25rem) {
				.breeds__link {
					margin-top: auto;
					margin-left: auto;
					margin-bottom: 0.75rem;
				}
			}

			.breeds__link > :global(svg) {
				width: 1.174rem;
				height: 1.5rem;
			}

			.breeds__list {
				display: grid;
				grid-template-columns: 1fr;
				gap: 0.813rem;
				margin-top: 1.628rem;
			}

			@media screen and (min-width: 21.875rem) {
				.breeds__list {
					grid-template-columns: repeat(2, 8.375em);
				}
			}

			@media screen and (min-width: 30rem) {
				.breeds__list {
					grid-template-columns: repeat(2, minmax(9rem, 1fr));
				}
			}

			@media screen and (min-width: 48rem) {
				.breeds__list {
					grid-column: span 2;
				}
			}

			@media screen and (min-width: 84.375rem) {
				.breeds__list {
					grid-template-columns: repeat(4, 13.75rem);
					gap: 3.188rem;
					margin-top: 2.875rem;
				}
			}
		`}</style>
	</>
)

export default Breeds
