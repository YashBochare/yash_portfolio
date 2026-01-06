import { useState, useEffect } from 'react'

export const useTypingEffect = (textArray, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingDelay, setTypingDelay] = useState(typingSpeed)

  useEffect(() => {
    let timer

    const handleTyping = () => {
      const i = loopNum % textArray.length
      const fullText = textArray[i]

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      )

      setTypingDelay(isDeleting ? deletingSpeed : typingSpeed)

      if (!isDeleting && displayText === fullText) {
        setTypingDelay(pauseDuration)
        setIsDeleting(true)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingDelay(500)
      }
    }

    timer = setTimeout(handleTyping, typingDelay)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, textArray, typingSpeed, deletingSpeed, pauseDuration, typingDelay])

  return displayText
}
