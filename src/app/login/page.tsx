import React from 'react'

const page = () => {
    console.log('demo env', process.env.NEXT_PUBLIC_API_URL)
  return (
    <div>page</div>
  )
}

export default page