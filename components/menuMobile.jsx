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

const MenuMobile = ({ showCatMenu, setShowCatMenu }) => {
    return (
        <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black px-6 py-4 gap-2'>
            {data.map((item)=>(
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li className='cursor-pointer py-4 px-5 border-b flex flex-col relative'  onClick={() => setShowCatMenu(!showCatMenu)}>
                            <div className='flex justify-between items-center'>
                           {item.name}
                           <AiOutlineDown />
                            </div>
                           {showCatMenu && (
                            <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                                {subMenuData.map((submenu)=>(
                                    <Link href='/' onClick={()=>setShowCatMenu(false)} key={submenu.id} >
                                        <li className='py-4 px-8 border-t flex justify-between'>
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
                            <Link href='/' onClick={()=>setShowCatMenu(false)}>{item?.name}</Link>
                        </li>
                    )} 
                </React.Fragment>
            ))}
        </ul>

    )
}

export default MenuMobile
