
import { cardData } from 'data';
import { AiOutlineRise, AiOutlineFall } from 'react-icons/ai'
import { AiOutlineAppstore } from 'react-icons/ai';
import Card from './card';

const Contents = () => {
    return (
        <div className="py-3 grid grid-rows-1 grid-cols-2">
            <div className=''>
            <div className="flex flex-row gap-3  ">
                <img src="https://deeplearningindaba.com/wp-content/uploads/2019/07/ShakirMohamed_S.2e16d0ba.fill-520x520_y0fw9zH-332x216.jpg" alt="profile"
                    className="h-12 w-12 rounded-full"
                />
                <p className="text-lg font-bold">Good Evening Shakir!</p>
            </div>
            <div className='flex flex-row  w-[16rem] mt-3 whitespace-pre'>
                <div>
                    <div className="flex flex-row gap-3">
                        <div className="bg-primary_green w-14 h-14  grid place-items-center  mt-10 rounded-lg">
                            <div className="grid place-items-center border-2 border-black text-xl rounded-lg">
                                <AiOutlineRise />
                            </div>
                        </div>
                        <div className="mt-10">
                            <p>Total earnings</p>
                            <p className="py-1 font-bold"> $12,594.10</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="bg-tertiary_green w-14 h-14  grid place-items-center  mt-10 rounded-lg">
                            <div className="grid place-items-center  text-xl rounded-lg">
                                <AiOutlineAppstore />
                            </div>
                        </div>
                        <div className="mt-10">
                            <p>Goal for This Month</p>
                            <p className="py-1 font-bold"> $16,196.80</p>
                        </div>
                    </div>
                </div>
                <div className="bg-orange px-28 ml-16  mt-10 rounded-lg  opacity-100 relative">
                    {
                        cardData.map((card)=>(
                            <div key={card.id}>
                                <Card card={card} />
                            </div>
                        ))
                    }
                </div>
                <div className='w-14 h-14 bg-red-500 '>
                     
                </div>
            </div>
            </div>
            <div className='flex flex-col'>  
            <div className=' ml-48 bg-gray-100 w-64 h-10 rounded-lg relative'>
               <p className='px-5 py-2 text-sm'>Choose Account</p>
               <div className='bg-primary_blue w-10 h-10  absolute top-0 right-0 '></div>
            </div>
            <div className='flex flex-row gap-2'>
            <div className='w-14 h-14 bg-orange ml-48 mt-16 rounded-lg grid place-items-center'>
                <div className='w-6 h-6 border-2 border-black rounded-lg grid place-items-center '>
                     <AiOutlineFall />
                </div>
            </div>
            <div className='mt-16'>
                    <p>Total Spendings</p>
                    <p className='font-bold py-1'>$4,596.80</p>
            </div>
            </div>
            <div className='flex flex-row gap-2'>
            <div className='w-14 h-14 bg-tertiary_blue ml-48 mt-8 rounded-lg grid place-items-center'>
                    <div className='border-2 border-black w-6 h-6 rounded-lg '>
                       
                    </div>
            </div>
            <div className='mt-8'>
                <p>Spending Goal</p>
                <p className='font-bold py-1'>$6,126.30</p>
            </div>
            </div>    
        </div>
        </div>
    )
}

export default Contents;