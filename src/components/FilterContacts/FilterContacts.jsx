import React from 'react'

const FilterContacts=({filter,changeFilter})=>(
    <label>
    <input
      type="text"
      name={filter}
      onChange={changeFilter}
      placeholder="Find contacts by name"
    />
  </label>
)
export default FilterContacts;