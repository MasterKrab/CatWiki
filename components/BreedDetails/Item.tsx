import Meter from 'components/Meter'

interface ItemProps {
	name: string
	value: string | number
}

const Item = ({ name, value }: ItemProps) => {
	const isMeter = typeof value === 'number'

	return (
		<>
			<li className={isMeter ? 'item-meter' : 'item'}>
				<strong id={name}>{name}: </strong>
				{isMeter ? <Meter value={value} min={0} max={4} labelId={name} /> : value}
			</li>
			<style jsx>{`
				.item-meter {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: 2rem;
				}

				@media screen and (min-width: 48rem) {
					.item {
						width: max-content;
					}
				}
			`}</style>
		</>
	)
}

export default Item
