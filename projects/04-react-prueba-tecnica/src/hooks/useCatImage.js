import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = `https://cataas.com`
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    //tres primeras palabra
    const firstWord = fact.split(' ', 3).join(' ')
    console.log(firstWord)

    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        console.log(response)
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
