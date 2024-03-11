import React from "react"

export const Sala = (props) => {
  const { text, color } = props
  return (
    <div style={{ display: "flex" }}>
      Sala:
      <div style={{ color: color }}>{text}</div>
    </div>
  )
}
