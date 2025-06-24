import React from 'react'

const ButtonList = () => {
  const buttonListData=["All","Music","Web series", "Action","Dramedy","Mixes","Podcast","T-series","Thrillers","Horror","Comedy","Comedy","Comedy","Comedy","Comedy","Comedy"];


  return (
    <div>
      <ul className='flex'>
      {
        buttonListData.map((ele,indx)=>{
          return <li key={indx} className='p-2 hover:bg-black hover:text-white  bg-slate-200 m-3 rounded-md text-xs font-semibold '>{ele}</li>
        })
      }
      </ul>
    </div>
  )
}

export default ButtonList