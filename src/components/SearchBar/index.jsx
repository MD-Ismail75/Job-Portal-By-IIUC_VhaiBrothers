import React from 'react'

function SearchBar() {
  return (
    <div>
	     <select>
       <option value="" disabled hidden>Job Role</option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="Developer Advocate">Developer Advocate</option>
       </select>
    </div>
  )
}

export default SearchBar