import { nanoid } from 'nanoid'
import classNames from 'classnames'

interface MeterProps {
	value: number
	min: number
	max: number
	labelId: string
}

const Meter = ({ value, min, max, labelId }: MeterProps) => (
	<>
		<div
			className="meter"
			role="meter"
			aria-valuenow={value}
			aria-valuemin={min}
			aria-valuemax={max}
			aria-labelledby={labelId}
		>
			{Array.from({ length: max }, (_, index) => (
				<div
					className={classNames({
						meter__bar: true,
						'meter__bar--active': index < value
					})}
					key={nanoid()}
				/>
			))}
		</div>
		<style jsx>{`
			.meter {
				display: inline-flex;
				gap: 0.531rem;
			}

			.meter__bar {
				background-color: var(--meter-bar-color);
				width: 3.75rem;
				height: 0.75rem;
				border-radius: 0.5rem;
			}

			.meter__bar--active {
				background-color: var(--meter-bar-active-color);
			}
		`}</style>
	</>
)

export default Meter
