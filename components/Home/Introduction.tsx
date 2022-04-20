import Image from 'next/image'
import SearchBox from 'components/SearchBox'
import blurImage from 'utils/blurImage'

const Introduction = () => (
	<>
		<article className="introduction">
			<div className="introduction__image-container">
				<div className="introduction__image-container-inner">
					<Image
						className="introduction__logo"
						src="/assets/images/CatwikiLogo.svg"
						alt="Logo"
						width={128}
						height={43}
						layout="raw"
						placeholder="blur"
						blurDataURL={blurImage}
					/>
				</div>
			</div>
			<h1 className="title">
				Get to know more about your <br /> cat breed
			</h1>
			<SearchBox />
		</article>
		<style jsx>{`
			.introduction {
				background-image: url('/assets/images/HeroImagesm.png');
				background-position-x: right;
				background-size: auto 100%;
				background-repeat: no-repeat;
				background-color: var(--hero-color);
				padding: 1.313rem 1.813rem;
				height: 9.137rem;
				color: var(--secondary-color);
				border-top-left-radius: 2.625rem;
				border-top-right-radius: 2.625rem;
			}

			@media screen and (min-width: 48rem) {
				.introduction {
					background-image: url('/assets/images/HeroImagemd.png');
					padding-top: 5rem;
					padding-left: 4rem;
					padding-right: 4rem;
					height: 25rem;
				}
			}

			@media screen and (min-width: 76.25rem) {
				.introduction {
					background-image: url('/assets/images/HeroImagelg.png');
					padding-top: 7.222rem;
					padding-left: 6.75rem;
					padding-right: 6.75rem;
					height: 33.637rem;
				}
			}

			.introduction__image-container :global(.introduction__logo) {
				width: 100%;
				height: 100%;
				filter: brightness(0) invert(1);
			}

			.introduction__image-container-inner {
				width: 19.41rem;
				height: 7.5rem;
			}

			@media screen and (max-width: 48rem) {
				.introduction__image-container {
					max-width: 4.25rem;
					overflow: hidden;
				}

				.introduction__image-container-inner {
					width: 7rem;
					height: 2.35rem;
				}
			}

			.title {
				font-size: 0.625rem;
				font-weight: 500;
				margin-top: 0.35rem;
			}

			@media screen and (min-width: 48rem) {
				.title {
					font-size: 1.5rem;
				}
			}
		`}</style>
	</>
)

export default Introduction
