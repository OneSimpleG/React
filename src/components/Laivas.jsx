import React from "react"

export const Laivas = (props) => {
  const { text, color } = props
  return (
    <div style={{ display: "flex" }}>
      Laivas:
      <div style={{ color: color }}>{text}</div>
    </div>
  )
}
