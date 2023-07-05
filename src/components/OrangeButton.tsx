import React from 'react'

const OrangeButton = ({buttonValue, buttonBg}: any) => {
  return (
    <button className={`${buttonBg} text-white font-semibold text-sm py-2 rounded w-full hover:bg-orange-400 transition duration-300`}>
        {buttonValue}
    </button>
  )
}

export default OrangeButton