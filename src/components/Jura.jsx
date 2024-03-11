import React from "react"
import { Valtis } from "./Valtis"
import { Laivas } from "./Laivas"
import { Sala } from "./Sala"
import { seaPlaners } from "../functions/seaPlaners"
export const Jura = () => {
  return (
    <div className="Component">
      {seaPlaners.map((planer, i) => {
        // console.log(planer.name, planer.id)
        if (planer.type === "man") {
          return (
            <div key={i}>
              <Valtis text={planer.name} color={planer.color} />
            </div>
          )
        } else if (planer.type === "car") {
          return (
            <div key={i}>
              <Laivas text={planer.name} color={planer.color} />
            </div>
          )
        } else if (planer.type === "animal") {
          return (
            <div key={i}>
              <Sala text={planer.name} color={planer.color} />
            </div>
          )
        } else {
          return (
            <p key={i} style={{ display: "flex" }}>
              Jura:
              <span style={{ color: planer.color }}>{planer.name}</span>
            </p>
          )
        }
      })}
    </div>
  )
}
