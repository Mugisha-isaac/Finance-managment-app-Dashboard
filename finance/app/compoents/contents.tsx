
import { cardData } from 'data';
import { AiOutlineRise } from 'react-icons/ai'
import { AiOutlineAppstore } from 'react-icons/ai';
import Card from './card';

const Contents = () => {
    return (
        <div className="py-3">
            <div className="flex flex-row gap-3  ">
                <img src="https://deeplearningindaba.com/wp-content/uploads/2019/07/ShakirMohamed_S.2e16d0ba.fill-520x520_y0fw9zH-332x216.jpg" alt="profile"
                    className="h-12 w-12 rounded-full"
                />
                <p className="text-lg font-bold">Good Evening Shakir!</p>
            </div>
            <div className='flex flex-row'>
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
                <div className="bg-red-500 w-9 h-11">
                    {
                        cardData.map((card)=>(
                            <div key={card.id}>
                                <Card card={card} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Contents;