import React from "react"
import { seaPlaners } from "../functions/seaPlaners"
export const Bala = () => {
  function createTable() {
    return seaPlaners.map((planer, index) => {
      return (
        <tr key={planer.id}>
          <td>{planer.id}</td>
          <td>{planer.type}</td>
          <td style={{ color: planer.color }}>{planer.name}</td>
        </tr>
      )
    })
  }
  return (
    <div className="Component">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{createTable()}</tbody>
      </table>
    </div>
  )
}
