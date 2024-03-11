import React from "react"
import { seaPlaners } from "../functions/seaPlaners"
export const Vardas = () => {
  return (
    <div className="Component">
      {seaPlaners
        .sort((a, b) => {
          if (a.name < b.name) {
            return -1
          }
          if (a.name > b.name) {
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
