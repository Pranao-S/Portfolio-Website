import React from 'react'

export const TransactionsList = () => { //exporting allows references to be made to the constant
  return (
    <>
      <h3>History</h3>
      <ul id='list' class='list'>
        Cash <span>-₹400</span><button class="delete-btn"></button>
      </ul>
    </>
  )
}

