import Item from './Item'
import resetList from 'styles/resetList'

interface BreedDetailsProps {
	temperament: string
	origin: string
	life_span: string
	adaptability: number
	affection_level: number
	grooming: number
	intelligence: number
	health_issues: number
	social_needs: number
	stranger_friendly: number
}

const BreedDetails = ({
	temperament,
	origin,
	life_span,
	adaptability,
	affection_level,
	grooming,
	intelligence,
	health_issues,
	social_needs,
	stranger_friendly
}: BreedDetailsProps) => (
	<>
		<ul className="list">
			<Item name="Temperament" value={temperament} />
			<Item name="Origin" value={origin} />
			<Item name="Life Span" value={`${life_span} years`} />
			<Item name="Adaptability" value={adaptability} />
			<Item name="Affection Level" value={affection_level} />
			<Item name="Grooming" value={grooming} />
			<Item name="Intelligence" value={intelligence} />
			<Item name="Health issues" value={health_issues} />
			<Item name="Social needs" value={social_needs} />
			<Item name="Stranger friendly" value={stranger_friendly} />
		</ul>
		<style jsx>{resetList}</style>
		<style jsx>{`
			.list {
				display: grid;
				grid-template-columns: 1fr;
				gap: 1rem;
				color: var(--primary-color);
			}

			@media screen and (min-width: 48rem) {
				.list {
					width: min-content;
				}
			}

			@media screen and (min-width: 75rem) {
				.list {
					gap: 2rem;
				}
			}
		`}</style>
	</>
)

export default BreedDetails
