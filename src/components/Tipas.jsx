import React from "react"
import { seaPlaners } from "../functions/seaPlaners"
export const Tipas = () => {
  return (
    <div className="Component">
      {seaPlaners
        .sort((a, b) => {
          if (a.type < b.type) {
            return -1
          }
          if (a.type > b.type) {
            return 1
          }
          return 0
        })
        .map((planer, i) => {
          return (
            <div key={i}>
              {planer.id}. {planer.type}
              <span style={{ color: planer.color }}> {planer.name}</span>
            </div>
          )
        })}
    </div>
  )
}
