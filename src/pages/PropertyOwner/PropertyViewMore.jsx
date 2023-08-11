import React from 'react'
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar'

const PropertyViewMore = () => {
    return (
        <div className='w-full h-[100vh] bg-background-blue'>
            <div className='w-full z-40'>
                <NavbarWithoutSidebar name="Anjalee Neelika" userRole="Property Owner" />
            </div> 
            <div className='w-full h-[calc(100vh-4.5rem)] p-10'>
                
            </div>
        </div>
    )
}

export default PropertyViewMore
