import React from 'react'

const FilterButtons = ({filter,setFilter,setPage}) => {
  return (
    <div className='flex items-center justify-center gap-3 my-4 flex-wrap'>
        <span className="font-medium text-gray-700">Filters :</span>

        {['ALL', 'PENDING', 'COMPLETED'].map(status => (
            <button 
                key={status}
                onClick={() => {
                    setFilter(status);
                    setPage(1)
                }}
                className={`px-4 py-2 rounded-lg font-medium ${
                    filter === status
                ? 'bg-blue-600 text-white shadow'
                : 'bg-white text-gray-700 hover:bg-blue-100 border'
            }`}
            >
                {status === 'ALL' ? 'All' : status.charAt(0) + status.slice(1).toLowerCase()}
            </button>
        ))}
    </div>
  )
}

export default FilterButtons