import React from "react"
import { Gyventojai } from "./Gyventojai"
import { seaPlaners } from "../functions/seaPlaners"
export const Pasaulis = () => {
  return (
    <div className="Component">
      <Gyventojai seaPlaners={seaPlaners} color="green" />
    </div>
  )
}
