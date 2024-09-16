import { projects } from '@/data'
import React from 'react'
import { div } from 'three/webgpu'
import { PinContainer } from './ui/3d-pin'
import { link } from 'fs'

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className='heading'>
        A small selection of {''}
        <span className='text-purple'> Recent Projects</span>

      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map(({id, iconLists, title, des, img, link}) =>(
            <div key={id} className='lg:min-h-[32rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                <PinContainer title={title} href={link}>
                    <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                            <img src="/bg.png" alt="bg-img" />
                        </div>
                        <div>
                            <img src={img}
                                 alt={title}
                                 className='z-10 absolute bottom-0' />
                        </div>

                    </div>
                    

                </PinContainer>

            </div>

        ))}

      </div>
    </div>
  )
}

export default RecentProjects
