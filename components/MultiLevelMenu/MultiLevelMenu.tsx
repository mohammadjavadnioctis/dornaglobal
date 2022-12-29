import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import styles from './styles.module.css'

import CogIcon from './cog.svg';
import ChevronIcon from './chevron.svg';
import ArrowIcon from './arrow.svg';
import BoltIcon from './bolt.svg';


export interface MultiLevelMenuItemType {
    id: string,
    label: string,
    goToMenu?: string,
    component?: null | any,
    menuItems?: MultiLevelMenuItemType[],
    parent?: string
}


export interface MultiLevelMenuType {
   structure: MultiLevelMenuItemType[]
}


const MultiLevelMenu: FC<MultiLevelMenuType> = (props) => {
    const {structure} = props
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // @ts-ignore
        setMenuHeight(dropdownRef.current?.firstChild?.offsetHeight)
    }, [])

    const calcHeight = (el: HTMLDivElement) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const DropdownItem = (props: any) => {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className={`main_container px-2`} style={{ height: (menuHeight && menuHeight + 100) ?? '', border: '1px solid orange' }} ref={dropdownRef}>
            {
                structure.map((menuItem) => {
                    const {id, component: Component} = menuItem
                    return (
<CSSTransition
                in={activeMenu === id}
                timeout={500}
                classNames={`menu-primary`}
                unmountOnExit
                // @ts-ignore
                onEnter={calcHeight}
            >
                <div className={`menu flex flex-col space-y-3`}>
                <DropdownItem goToMenu={'main'} >main menu</DropdownItem>
                    {
                        menuItem?.menuItems?.map((subMenuItem) => 
                        {
                            const {id, label} = subMenuItem
                            return (<DropdownItem goToMenu={id} >{label}</DropdownItem>)
                        })
                    }
                    {
                        Component && <>
                         hi
                         <Component />
                        </>
                    }
                    {/* <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        // leftIcon={<CogIcon />}
                        // rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        // rightIcon={<ChevronIcon />}
                        goToMenu="animals">
                        Animals
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        // rightIcon={<ChevronIcon />}
                        goToMenu="test">
                        test
                    </DropdownItem> */}

                </div>
                {/* <p>hi</p> */}
            </CSSTransition>
                    )
                })
            }
            

            {/* <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames={`menu-primary`}
                unmountOnExit
                // @ts-ignore
                onEnter={calcHeight}
            >
                <div className={`menu flex flex-col space-y-3`}>
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        // leftIcon={<CogIcon />}
                        // rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        // rightIcon={<ChevronIcon />}
                        goToMenu="animals">
                        Animals
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        // rightIcon={<ChevronIcon />}
                        goToMenu="test">
                        test
                    </DropdownItem>

                </div>
                {/* <p>hi</p> */}
           {/* </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames={`menu-secondary`}
                unmountOnExit
                // @ts-ignore
                onEnter={calcHeight}
            >
                <div className="menu flex flex-col">
                    <DropdownItem goToMenu="main"
                    //   leftIcon={<ArrowIcon />}
                    >
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem
                    // leftIcon={<BoltIcon />}
                    >HTML</DropdownItem>
                    <DropdownItem
                    //   leftIcon={<BoltIcon />}
                    >CSS</DropdownItem>
                    <DropdownItem
                    //leftIcon={<BoltIcon />}
                    >JavaScript</DropdownItem>
                    <DropdownItem
                    //   leftIcon={<BoltIcon />}
                    >Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames={`menu-secondary`}
                unmountOnExit
                // @ts-ignore
                onEnter={calcHeight}
            >
                <div className={`menu`}>
                    <DropdownItem goToMenu="main"
                    //   leftIcon={<ArrowIcon />}
                    >
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'test'}
                timeout={500}
                classNames={`menu-secondary flex flex-col`}
                unmountOnExit
                // @ts-ignore
                onEnter={calcHeight}
            >
                <div className={`menu flex flex-col`}>
                    <DropdownItem goToMenu="main"
                    //   leftIcon={<ArrowIcon />}
                    >
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">test</DropdownItem>
                    <DropdownItem leftIcon="🐸">test</DropdownItem>
                    <DropdownItem leftIcon="🦋">test?</DropdownItem>
                    <DropdownItem leftIcon="🦔">test</DropdownItem>
                </div>
            </CSSTransition> */}
        </div>
    );
}

export default MultiLevelMenu