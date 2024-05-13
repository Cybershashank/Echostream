import React from 'react'

const interview = () => {
  return (
    <>
      <div className='my-2 mx-5'>
        <div className='font-medium text-muted text-opacity-30 flex items-center truncate'>
          <a href='/'>
            <span>Home</span>
          </a>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </span>
          <a className='pointer-events-none text-brand-500'>Best in Romance</a>
        </div>
      </div>

      <div className='flex sm:justify-center'>
        <div className='container'>
          <h1 className='p-4 text-lg font-semisolid'>Best in Romance</h1>
          <div className='flex flex-wrap md:justify-center mx-4 md:mx-0 space-y-3 md:space-y-0'>

            <div className='flex md:block space-x-3 md:space-x-0 md:mt-0 md:mr-4'>
              <div className='relative'>
                <a href=''>
                  <div className='h-28 w-28 md:h-28 md:w-28 inline-block relative flex-shrink-0 rounded-lg'>
                    <img
                      alt='motivational'
                      loading='lazy'
                      decoding='async'
                      data-nimg='fill'
                      className='rounded-lg contain'
                      sizes='100vw'
                      src='https://images.unsplash.com/photo-1627632958716-3c2a7a6b6c4d?auto=format&fit=crop&w=400&q=60'
                      style={{ width: '100%', height: '100%', inset: '0px', position: 'absolute', color: 'transparent' }}
                    />
                  </div>
                </a>
              </div>
              <a href=''>
                <div className='mr-2 w-52 md:w-44 truncate !text-clip md:overflow-visible md:whitespace-normal md:mb-2 md:text-base font-semisolid md:font-normal'>Motivational</div>
                <div className='block md:hidden'>
                  <div className='flex flex-wrap gap-1 items-center'>
                    <div className='bg-[#228b22] rounded-full p-0.5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                      </svg>
                    </div>
                    <div className='font-semibold text-xs'>5.0</div>
                    <div className='\text-xs'>(16K+ Listens)</div>
                    <span className='bg-gray-700 rounded-full h-[6x] w-[6x]'></span>
                    <div className='text-xs'>5 min</div>
                  </div>
                  <div className='h-16 w-56 overflow-hidden text-gray-5000 text-sm__web-inspector-hide-shortcut__'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec felis nec odio.
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default interview;