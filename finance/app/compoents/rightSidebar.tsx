import {AiOutlineSearch,AiOutlineBell} from 'react-icons/ai'

const RightSidebar = ()=>{
    return(
        <div className="bg-primary_gray w-fit h-fit mt-6 whitespace-pre">
           <div className="grid grid-rows-1 grid-cols-2 ml-5 mt-3 ">
             <div className=" w-40">
                 <p className="font-bold text-lg">Orizon Crypto</p>
                 <p className="font-sm">Increase your profit</p>
             </div>
             <div className="flex flex-row gap-4">
                 <div className="bg-white w-8 h-8 rounded-full ml-10 mt-1 grid place-items-center">
                   <AiOutlineSearch className='font-bold text-2xl' />
                 </div>
                 <div className="bg-white w-8 h-8 rounded-full mt-1 grid place-items-center">
                    <AiOutlineBell className='text-2xl' />
                 </div>
             </div>
           </div>

           <div className='bg-primary_blue w-72 h-32 ml-5 mt-14 rounded-lg'>
               <p className='px-5 py-3 text-white font-bold'>My portifolio</p>
               <p className='px-5 text-2xl  font-bold text-white'>$34,010.00</p>
               <div className='flex flex-row gap-3'>
               <button className='w-28 h-10 bg-white rounded-lg ml-6 mt-4 drop-shadow-lg'>Deposit</button>
               <button className='w-28 h-10 bg-white rounded-lg  mt-4 drop-shadow-lg'>Withdraw</button>
               </div>
           </div>
        </div>
    )
}

export default RightSidebar;