import React from 'react'
import config from '@/payload.config'
import Image from 'next/image'
import { getPayload, type DefaultServerCellComponentProps } from 'payload'

const MyComponent = async (props: DefaultServerCellComponentProps) => {
  const payload = await getPayload({ config })

  const { cellData } = props
  const media = await payload.findByID({
    collection: 'media',
    id: cellData,
  })
  console.log(media)

  return (
    <div style={{ width: '80px', height: '80px' }}>
      <Image src={media.url!} alt={media.alt} width={80} height={80} />
    </div>
  )
}
export default MyComponent
