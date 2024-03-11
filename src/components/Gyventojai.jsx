import React from "react"

export const Gyventojai = (props) => {
  const { seaPlaners, color } = props
  const allColors = []
  console.log(color)
  console.log(seaPlaners)
  seaPlaners.forEach((el) => {
    allColors.push(el.color)
  })
  if (allColors.includes(color)) {
    return seaPlaners
      .sort((a, b) => a.id - b.id)
      .map((planer, i) => {
        if (planer.color === color) {
          return (
            <div key={i}>
              {planer.id}.
              <span style={{ color: planer.color }}>{planer.name}</span>
            </div>
          )
        }
        return null
      })
  } else {
    return seaPlaners
      .sort((a, b) => a.id - b.id)
      .map((planer, i) => {
        return (
          <div key={i}>
            {planer.id}.
            <span style={{ color: planer.color }}>{planer.name}</span>
          </div>
        )
      })
  }
}
