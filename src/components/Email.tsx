import Link from 'next/link'
import React from 'react'

function Email() {
  return (
    <div className='email'>
        <Link href="mailto:kevintvu123@gmail.com" className='email-link' target='_blank'>
            kevintvu123@gmail.com
        </Link>
    </div>
  )
}

export default Email