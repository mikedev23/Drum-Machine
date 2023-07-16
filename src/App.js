import React, { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [displayText, setDisplayText] = useState('')

  const handleDrumPadClick = event => {
    const audioElement = event.target.querySelector('audio')
    const selectedText = audioData.find(
      data => data.text === audioElement.id
    )?.displayText
    if (selectedText) {
      setDisplayText(selectedText)
    }
    audioElement.play()
  }

  const handleKeyDown = event => {
    const drumPad = audioData.find(
      data => data.text === event.key.toUpperCase()
    )
    if (drumPad) {
      const audioElement = document.getElementById(drumPad.text)
      if (audioElement) {
        const selectedText = drumPad.displayText
        if (selectedText) {
          setDisplayText(selectedText)
        }
        audioElement.play()
      }
    }
  }

  const audioData = [
    {
      id: 'drum-pad-1',
      text: 'Q',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      displayText: 'Heater 1'
    },
    {
      id: 'drum-pad-2',
      text: 'W',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      displayText: 'Heater 2'
    },
    {
      id: 'drum-pad-3',
      text: 'E',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      displayText: 'Heater 3'
    },
    {
      id: 'drum-pad-4',
      text: 'A',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      displayText: 'Heater 4'
    },
    {
      id: 'drum-pad-5',
      text: 'S',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      displayText: 'Heater 6'
    },
    {
      id: 'drum-pad-6',
      text: 'D',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      displayText: 'Dsc Oh'
    },
    {
      id: 'drum-pad-7',
      text: 'Z',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      displayText: 'Kick n Hat'
    },
    {
      id: 'drum-pad-8',
      text: 'X',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      displayText: 'RP4 Kick 1'
    },
    {
      id: 'drum-pad-9',
      text: 'C',
      audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      displayText: 'Cev H2'
    }
  ]

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div id='drum-machine'>
      <div className='App'>
        <div id='display'>{displayText}</div>
        {audioData.map(data => (
          <div
            className='drum-pad'
            id={data.id}
            key={data.id}
            onClick={handleDrumPadClick}
          >
            {data.text}
            <audio className='clip' id={data.text} src={data.audioSrc} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
