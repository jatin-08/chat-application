import React, { useState } from 'react'
import userProfile from '../../assets/user profile.png'
import './Chat.css'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, ScrollShadow } from '@nextui-org/react';

const Chat = () => {

    const items = ['Jatin Yadav', 'Santosh Kumar', 'Krishna bhaiya', 'Anupam Verma', 'Tanmay sir', 'Jatin Yadav', 'Santosh Kumar', 'Krishna bhaiya', 'Anupam Verma', 'Tanmay sir', 'PestExpert', 'Santosh Kumar', 'Krishna bhaiya', 'Anupam Verma', 'Tanmay sir', 'PestExpert'];
    const [users, setUsers] = useState(items)
    const [searchval, setsearchval]: any = useState('')

    function handleSearchClick() {
        if (searchval === '') {
            setUsers(items)
            return
        }
        const getDataByFilter = items.filter((item) => {
            if (item.includes(searchval)) {
                return item;
            }
        })
        setUsers(getDataByFilter)
    }
    return (
        <section className='p-5 chat-section'>
            <div className='w-100 box flex'>
                <div className='w-1/4 text-white rounded-l-md sidebar rounded-md'>
                    <div className='flex justify-between items-center menu-bar rounded-t-md shadow'>
                        <div className='userprofile p-2 cursor-pointer'>
                            <img src={userProfile} alt="image" />
                        </div>
                        <div className='search-bar bg-white rounded-md'>
                            <form className='form'>
                                <label htmlFor="search">
                                    <i className="fa-solid fa-magnifying-glass text-black p-2"></i>
                                    <input type="text" onChange={e => setsearchval(e.target.value)} className='input text-black border-none outline-none' placeholder="search" id='search' autoComplete='off' />

                                </label>
                            </form>
                        </div>
                        <div>
                            <Dropdown >
                                <DropdownTrigger>
                                    <i className="fa-solid fa-bars cursor-pointer mr-5" onClick={handleSearchClick}></i>
                                </DropdownTrigger>
                                <DropdownMenu>
                                    <DropdownItem key="profile">Profile</DropdownItem>
                                    <DropdownItem key="group">create Group</DropdownItem>
                                    <DropdownItem key="info">Info</DropdownItem>
                                    <DropdownItem key="signout" className="text-danger" color="danger">
                                        SignOut
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                        </div>
                    </div>
                    <div className=''>
                        <ScrollShadow hideScrollBar className="w-[350px] h-[680px]">
                            {users.map((item, index) => (

                                <div className='cursor-pointer flex border-b-1 items-center'>
                                    <div className='userprofile p-2 cursor-pointer'>
                                        <img src={userProfile} alt="image" />
                                    </div>
                                    <div className='w-3/4 p-5'>
                                        <p className='userlist' key={index}>{item}</p>
                                    </div>
                                </div>

                            ))}
                        </ScrollShadow>
                    </div>
                </div>
                <div className='w-3/4 rounded-r-md chat-box rounded-md shadow-md'>
                    <div className='flex items-center justify-between menu-bar rounded-t-md shadow-md text-white'>
                        <div className='userprofile p-2 cursor-pointer'>
                            <img src={userProfile} alt="image" />
                        </div>
                        <div>
                            <Dropdown >
                                <DropdownTrigger>
                                    <i className="fa-solid fa-bars cursor-pointer mr-5"></i>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Example with disabled actions">
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                    <DropdownItem key="delete" className="text-danger" color="danger">
                                        Delete file
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat