import { useEffect } from "react"

interface Props {
  title: string
  description: string
}

export const useSEO = ({ title, description }: Props) => {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute("content", description)
  }, [title, description])

}
