import IMAGE from '@const/Image'
import Image from "next/image";
import { Button } from '@headlessui/react'
import React from 'react'

const RecentlyButton = ({ icon,onClick,title}: any) => {
  return (
    <>
      <Button className="recent-btn inline-flex items-center" onClick={onClick}>
        {!!icon && <span className="">{icon}</span>}
        {title}
      </Button>
    </>
  )
}

export default RecentlyButton