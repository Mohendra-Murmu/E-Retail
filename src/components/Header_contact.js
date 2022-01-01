import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
function Header_contact() {
    return (
        <div className="flex h-7 sticky w-full top-0 z-10 border-eretail_dark_neon-orange border-b-1 bg-eretail_dark_neon-black">
            <div className="flex items-center justify-evenly md:justify-end w-full h-6 max-w-7xl whitespace-nowrap my-0 mx-auto">
                <span className='flex cursor-pointer hover:text-gray-200 max-w-xs text-white text-xs my-0 mx-4'>
                    <PhoneIcon className="h-4 mx-1.5" /> (00)0000 - 0000
                </span >
                <span className='flex cursor-pointer hover:text-gray-200 max-w-xs text-white text-xs my-0 mx-4'>
                    <MailIcon className="h-4 mx-1.5"></MailIcon> e-retail@email.com
                </span >
            </div >
        </div >
    )
}

export default Header_contact

