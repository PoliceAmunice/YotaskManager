import { useState, useEffect } from 'react'

export function useInfiniteScroll(callback) {
	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	function handleScroll() {
		let scrollHeght = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		)
		if (Math.ceil(document.documentElement.clientHeight)
			+ Math.ceil(window.pageYOffset)
			< Math.ceil(scrollHeght) - 100)
			return
		setIsFetching(true)
	}

	useEffect(() => {
		if (!isFetching) return
		callback()
	}, [isFetching])

	return [isFetching, setIsFetching]
}