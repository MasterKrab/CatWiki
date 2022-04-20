import Link from 'next/link'
import Image from 'next/image'

const Header = () => (
	<>
		<header className="header">
			<nav>
				<Link href="/">
					<a className="link">
						<Image src="/assets/images/CatwikiLogo.svg" alt="Logo" width={128} height={43} />
					</a>
				</Link>
			</nav>
		</header>
		<style jsx>{`
			.link {
				display: block;
				height: 2.688rem;
			}
		`}</style>
	</>
)

export default Header
