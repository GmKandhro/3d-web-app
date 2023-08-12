import React from 'react'
import Link from 'next/link'
import { AiOutlineDown } from 'react-icons/ai';

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
    return (
        <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
            {data.map((item)=>(
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li className='cursor-pointer flex relative items-center gap-2' onMouseEnter={()=>setShowCatMenu(true)} onMouseLeave={()=>setShowCatMenu(false)}>
                           {item.name}
                           <AiOutlineDown />
                           {showCatMenu && (
                            <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-2 text-black shadow-lg'>
                                {subMenuData.map((submenu)=>(
                                    <Link href='/' onClick={()=>setShowCatMenu(false)} key={submenu.id} >
                                        <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-sm'>
                                            {submenu.name}
                                            <span className='opacity-40 text-sm'>23</span>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                           )}
                        </li>
                    ) : (
                        <li className='cursor-pointer'>
                            <Link href='/'>{item?.name}</Link>
                        </li>
                    )} 
                </React.Fragment>
            ))}
        </ul>

    )
}

export default Menu
