import Image from 'next/image'

const Footer = () => (
	<>
		<footer className="footer">
			<div className="image-container">
				<Image
					src="/assets/images/CatwikiLogo.svg"
					alt="Logo"
					width={128}
					height={43}
					layout="responsive"
					sizes="(max-width: 768px) 73px 20px"
				/>
			</div>
			<small className="small">Challenge from © devChallenge.io 2021</small>
		</footer>
		<style jsx>{`
			.footer {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 0.897rem;
				background-color: var(--primary-color);
				margin-top: auto;
				padding: 1.886rem 1.813rem;
				font-size: 0.75rem;
				font-weight: bold;
				color: var(--secondary-color);
				border-top-left-radius: 2.625rem;
				border-top-right-radius: 2.625rem;
			}

			@media screen and (min-width: 48rem) {
				.footer {
					flex-direction: row;
					align-items: center;
					font-size: 1.125rem;
				}
			}

			.image-container {
				filter: brightness(0) invert(1);
				width: 4.59rem;
			}

			@media screen and (min-width: 48rem) {
				.image-container {
					width: 8rem;
				}
			}
		`}</style>
	</>
)

export default Footer
