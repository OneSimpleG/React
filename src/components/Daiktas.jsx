import React from "react"
import { seaPlaners } from "../functions/seaPlaners"
export const Daiktas = (props) => {
  const { text } = props
  if (text === "==") {
    return seaPlaners.map((planer, i) => {
      if (planer.id % 2 === 0) {
        return (
          <div key={i} style={{ display: "flex" }}>
            <div>{planer.id}:</div>
            <div style={{ color: planer.color }}>{planer.name}</div>
          </div>
        )
      } else return null
    })
  } else {
    return seaPlaners.map((planer, i) => {
      if (planer.id % 2 !== 0) {
        return (
          <div key={i} style={{ display: "flex" }}>
            <div>{planer.id}:</div>
            <div style={{ color: planer.color }}>{planer.name}</div>
          </div>
        )
      } else return null
    })
  }
}
