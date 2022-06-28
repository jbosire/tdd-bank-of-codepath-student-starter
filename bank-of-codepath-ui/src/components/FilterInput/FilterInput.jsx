import * as React from "react"
import "./FilterInput.css"

export default function FilterInput(props) {
  return (
    <div className="filter-input">
      <i className="material-icons">search</i>
      <input type="text" placeholder="Search transactions" onChange={props.handleOnChange} value={props.inputValue} />
    </div>
  )
}
