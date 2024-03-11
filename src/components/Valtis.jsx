import React from "react"

export const Valtis = (props) => {
  const { text, color } = props
  return (
    <div style={{ display: "flex" }}>
      Valtis:
      <div style={{ color: color }}>{text}</div>
    </div>
  )
}
