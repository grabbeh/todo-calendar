import { useEffect, useState } from 'react'
import mario from '../assets/mario.mp3'

export default function Test() {
	const [audio, setAudio] = useState(null)
	useEffect(() => {
		setAudio(new Audio(mario))
	}, [])

	const playAudio = () => {
		console.log(audio)
		audio.crossOrigin = 'anonymous'
		var playPromise = audio.play()
		console.log(playPromise)
		if (playPromise !== undefined) {
			playPromise
				.then(function () {
					// Automatic playback started!
				})
				.catch(function (error) {
					// Automatic playback failed.
					// Show a UI element to let the user manually start playback.
				})
		}
	}

	return (
		<div
			onClick={() => {
				playAudio()
			}}
		>
			Hello world
		</div>
	)
}
