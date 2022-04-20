import Link from 'next/link'
import Image from 'next/image'
import { MdArrowRightAlt } from 'react-icons/md'
import blurImage from 'utils/blurImage'

const Information = () => (
	<>
		<article className="information">
			<div>
				<h2 className="information__title">
					Why sould <br /> you have a cat
				</h2>
				<p className="information__text">
					Having a cat around you can actually trigger the release of calming chemicals in your body
					which lower your stress and anxiety leves
				</p>
				<a
					className="information__link"
					href="/api/article"
					target="_blank"
					rel="noopener noreferrer"
				>
					Read more <MdArrowRightAlt aria-hidden="true" />
				</a>
			</div>
			<div className="images">
				<div className="images__image">
					<Image
						src="/assets/images/image 1.png"
						alt="A woman carrying a cat and holding its paws with one hand."
						width={249}
						height={440}
						layout="responsive"
						placeholder="blur"
						blurDataURL={blurImage}
					/>
				</div>
				<div className="images__image">
					<Image
						src="/assets/images/image 2.png"
						alt="A cat sleeping on top of a woman"
						width={411}
						height={252}
						layout="responsive"
						placeholder="blur"
						blurDataURL={blurImage}
					/>
				</div>
				<div className="images__image">
					<Image
						src="/assets/images/image 3.png"
						alt="A cat in a backpack"
						width={359}
						height={580}
						layout="responsive"
						placeholder="blur"
						blurDataURL={blurImage}
					/>
				</div>
			</div>
		</article>
		<style jsx>{`
			.information {
				display: grid;
				grid-template-columns: 1fr;
				color: var(--cuaternary-color);
			}

			@media screen and (min-width: 48rem) {
				.information {
					padding-top: 6.25rem;
					padding-left: 6.75rem;
					padding-right: 6.75rem;
				}
			}

			@media screen and (min-width: 76.25rem) {
				.information {
					grid-template-columns: repeat(2, 1fr);
					gap: 2.409rem;
				}
			}

			.information__title {
				position: relative;
				margin-top: 5.193rem;
				margin-bottom: 3.115rem;
				font-size: 2.5rem;
			}

			@media screen and (min-width: 48rem) {
				.information__title {
					font-size: 3rem;
				}
			}

			.information__title::before {
				content: '';
				position: absolute;
				top: -1.015rem;
				left: 0;
				background-color: var(--cuaternary-color);
				width: 3.178rem;
				height: 0.196rem;
				border-radius: 4.813rem;
			}

			.information__text {
				margin-top: 0;
				font-size: 1.125rem;
				line-height: 1.371rem;
			}

			@media screen and (min-width: 48rem) {
				.information__text {
					font-size: 1.125rem;
				}
			}

			.information__link {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				margin-top: 1.684rem;
				margin-bottom: 3.983rem;
				font-size: 0.75rem;
				font-weight: 700;
				text-decoration: none;
				text-transform: uppercase;
				color: var(--cuaternary-color-light);
			}

			@media screen and (min-width: 76.25rem) {
				.information__link {
					font-size: 1.125rem;
					margin-bottom: 0;
				}
			}

			.information__link > :global(svg) {
				width: 1.028rem;
				height: 1rem;
			}

			@media screen and (min-width: 76.25rem) {
				.information__link > :global(svg) {
					width: 1.174rem;
					height: 1.5rem;
				}
			}

			.images {
				display: grid;
				grid-template-columns: 5.6fr 4.4fr;
				gap: 1.123rem 1.062rem;
			}

			.images__image:first-child {
				grid-row: 2 / 3;
				margin-left: auto;
				width: 75%;
			}

			.images__image:last-child {
				grid-row: 1 / 3;
			}
		`}</style>
	</>
)

export default Information
