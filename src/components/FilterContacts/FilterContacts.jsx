import React from 'react'
// Стилі
import {Label,Input} from './FilterContacts.styled'
const FilterContacts=({filter,changeFilter})=>(
    <Label>
    <Input
      type="text"
      name={filter}
      onChange={changeFilter}
      placeholder="Find contacts by name"
    />
  </Label>
)
export default FilterContacts;