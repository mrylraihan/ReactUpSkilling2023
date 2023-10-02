import React from 'react'

function Card({title, body, id}) {
  return (
      <div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">{title}</li>
              <li class="list-group-item">{body}</li>
              <li class="list-group-item">{id}</li>
          </ul>
      </div>
  )
}

export default Card