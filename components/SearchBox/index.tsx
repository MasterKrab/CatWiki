import { useState } from 'react'
import Form from './Form'
import useIsMobile from 'hooks/useIsMobile'
import FocusLock from 'react-focus-lock'

const SearchBox = () => {
	const [openModal, setOpenModal] = useState(false)
	const isMobile = useIsMobile()

	const handleFocus = () => {
		setOpenModal(isMobile)
	}

	const handleCloseModal = () => {
		setOpenModal(false)
	}

	return (
		<>
			<Form onFocus={isMobile ? handleFocus : null} />
			{isMobile && openModal && (
				<div role="dialog">
					<FocusLock>
						<Form onCloseModal={handleCloseModal} isModal={true} />
					</FocusLock>
				</div>
			)}
		</>
	)
}

export default SearchBox
