import { useState, useEffect } from 'react'
import useWindowEvent from 'hooks/useWindowEvent'
import getIsMobile from 'utils/getIsMobile'

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false)

	const update = () => setIsMobile(getIsMobile())

	useEffect(update, [])

	useWindowEvent('resize', update)

	return isMobile
}

export default useIsMobile
