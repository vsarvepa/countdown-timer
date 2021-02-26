import { useMemo } from 'react'
import { renderToString } from 'react-dom/server'

const processSvg = svg => {
  return renderToString(svg)
}

export const Icon = ({
  children
}) => {
  const svgString = useMemo(() => processSvg(children), [children])

  return (
    <i aria-hidden="true" dangerouslySetInnerHTML={{ __html: svgString }}/>
  )
}