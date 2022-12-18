import { FC, useState } from 'react';
import { Button, createStyles, Group } from '@mantine/core';
// import  hamburgerIcon from "~/public/icons/hamburger.svg";
import  xIcon from "~/public/icons/xIcon.svg";

// import { NAVIGATION_MENU } from '../../lib/MasterHeader/NavigationMenu';

// import {ReactComponent as SupportIcon } from '../../images/icons/SupportIcon.svg'
// import {ReactComponent as FAQIcon } from '../../images/icons/FAQIcon.svg'

import { UiDrawer } from '~/lib';
import { mainMenuData } from '~/utils/data/menus';
import { useRouter } from 'next/router';
import UiLink from '~/lib/UiLink';
import UiImage from '~/lib/Image';
import HamburgerIcon from '~/public/icons/hamburger';



const MobileMenu: FC = () => {
  const [opened, setOpened] = useState(false);
  const Icon = opened ? xIcon : HamburgerIcon;


  const useStyles = createStyles(() => ({
    drawer: {
      marginTop: '57px',
      backgroundColor: 'white', 
      paddingRight: '0 !important'
    },
    closeButton: {
      display: 'none'
    },
    root: {
      paddingRight: '0 !important'
    }

  }));
  const { classes } = useStyles()
  const history = useRouter()
  return (
    <div className='xl:hidden mr-2'>
      <UiDrawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="70%"
        overlayColor='transparent'
        // className='mt-20'
        classNames={{ drawer: classes.drawer, closeButton: classes.closeButton, root: classes.root }}
      >
        <div className='max-h-[95%] overflow-y-scroll flex flex-col space-y-7'>
          <ul className='flex flex-col space-y-7'>


            {mainMenuData.map((item) => {

              const { icon: Icon, name } = item
              return (




                  <UiLink
                    rel="noopener noreferrer"
                    className={`inline-flex items-center xl:text-xs text-sm xl:my-0 font-normal text-[#3944B3] dark:text-black py-2 rounded-full hover:text-[#ed4b45] dark:hover:bg-neutral-800 dark:hover:text-neutral-200`}
                    href={item.href}
                    onClick={(e: any) => { setOpened(false); history.push(item.href) }}
                    // activeClassName="active-nav-item !text-[#ed4b45] dark:bg-neutral-800 dark:!text-neutral-100"
                    key={item.id}
                  >
                  <li className='flex items-center justify-center'>

                    {" "}
                    {/* <div className="bullets w-[2px] h-[5px] rounded-[3px] bg-[#3944B3] dark:bg-black mr-4"></div> */}
                    {/* {Icon && <Icon className="mr-5 text-[#3944B3] dark:text-white" />} */}
                    <span className='text-orange'>
                      <Icon className='text-accent mr-4 w-5 h-5'/> 
                    </span>
                    <span className='text-sm text-[#3944B3] dark:text-white'>

                    {item.name}
                    </span>


                </li>
                  </UiLink>

              )
            }
            )}



          </ul>
          <div className="w-[calc(100%_-_24px)] min-h-[48px]  text-sm border-accent dark:!border-white border rounded-lg bg-white 
                                dark:bg-transparent text-accent  my-4 flex justify-center items-center"
            onClick={() => { setOpened(false); history.push('add-property') }}
          >
            <span className="w-[2px] h-[5px] mr-4 bg-accent text- dark:bg-white "></span>
            {/* {route()} */}
            <span className='dark:text-white'>
              Add your property
            </span>
          </div>
          {/* <div className='flex flex-col space-y-7'>

          <NavLink
                    exact
                    strict
                    rel="noopener noreferrer"
                    className={`inline-flex items-center xl:text-xs text-sm xl:my-0 font-normal text-[#3944B3] dark:text-black py-2 rounded-full hover:text-[#ed4b45] dark:hover:bg-neutral-800 dark:hover:text-neutral-200`}
                    to={{
                      pathname: '/support',
                    }}
                    onClick={handleSupportClick}
                    activeClassName="active-nav-item !text-[#ed4b45] dark:bg-neutral-800 dark:!text-neutral-100"
                    key={'support'}
                  >
                    {" "}
                    {/* <div className="bullets w-[2px] h-[5px] rounded-[3px] bg-[#3944B3] dark:bg-black mr-4"></div> */}
                   {/* <SupportIcon className="mr-5 text-[#3944B3] dark:text-white" />
                   <span className='dark:text-white'> Support
                    </span>
                  </NavLink>
          <NavLink
                    exact
                    strict
                    rel="noopener noreferrer"
                    className={`inline-flex items-center xl:text-xs text-sm xl:my-0 font-normal text-[#3944B3] dark:text-black py-2 rounded-full hover:text-[#ed4b45] dark:hover:bg-neutral-800 dark:hover:text-neutral-200`}
                    to={{
                      pathname: '/support/faq',
                    }}
                    onClick={handleFaqClick} */}
                    {/* // activeClassName="active-nav-item !text-[#ed4b45] dark:bg-neutral-800 dark:!text-neutral-100"
                    key={'support'}
                  >
                    {" "}
                    {/* <div className="bullets w-[2px] h-[5px] rounded-[3px] bg-[#3944B3] dark:bg-black mr-4"></div> 
                   <FAQIcon className="mr-5 text-[#3944B3] dark:text-white" />
                   <span className='dark:text-white'>
                    
                     FAQ
                    </span>

                  </NavLink>
          </div>  */}


        </div>
      </UiDrawer>

      <Group position="center">
        <Button className='p-0 rotate-180' onClick={() => setOpened(prev => !prev)}>
            {/* <Icon color={`#F75847`} /> */}
              {/* <UiImage 
                src='/icons/hamburger.svg'
                width={30}
                height={30}
              /> */}
              <HamburgerIcon className='text-accent' />
            </Button>
      </Group>
    </div>

  )
}
export default MobileMenu