'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { decrement, increment } from '@/redux/features/room/roomSlice'

export default function Counter() {
  const count = useAppSelector(state => state.counterReducer.value)
  const dispatch = useAppDispatch()


  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      {/* <div>
        {data?.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div> */}
    </div>
  )
}