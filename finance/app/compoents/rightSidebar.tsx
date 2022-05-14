/* eslint-disable jsx-a11y/anchor-is-valid */
import { BinanceData, BitCoinData, EtheriumData } from 'data'
import {AiOutlineSearch,AiOutlineBell,AiOutlineDownload,AiOutlineUpload} from 'react-icons/ai'
import {BsCurrencyBitcoin} from 'react-icons/bs'
import {FaEthereum} from 'react-icons/fa';
import LineChartComponent from '~/utils/linechart'

const RightSidebar = ()=>{
    return(
        <div className="bg-primary_gray w-[21rem] h-fit mt-6 whitespace-pre">
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
               <button className='w-28 h-10 bg-white rounded-lg ml-6 mt-4 drop-shadow-lg font-bold flex flex-row gap-1   '>
                <AiOutlineDownload className='text-xl mt-2 ml-5' />
                  <p className='mt-2  text-sm'>Deposit</p> 
                   </button>
               <button className='w-28 h-10 bg-white rounded-lg ml-6 mt-4 drop-shadow-lg font-bold flex flex-row gap-1'>
                   <AiOutlineUpload className='text-xl mt-2 ml-3' />
                   <p className='mt-2  text-sm'>Withdraw</p>
               </button>
               </div>
           </div>
           <div className='flex flex-row mt-16 gap-40 ml-5'>
               <p className='font-bold'>Favorites</p>
               <a href="#" className='text-blue-700 font-bold'>See All</a>
           </div>
           <div className='flex flex-row ml-5 mt-4 gap-6'>
                 <div className='bg-white drop-shadow-lg w-36 h-48 rounded-lg cursor-pointer'>
                       <div className='flex flex-row m-4 gap-2'>
                           <div className='w-9 h-9 bg-black rounded-full grid place-items-center'>
                              <BsCurrencyBitcoin className='text-white text-xl rotate-[20deg]' />
                           </div>
                           <div>
                           <p>BTC</p>
                            <p className='opacity-50'>Bitcoin</p>
                           </div>
                       </div>
                       <div className='mt-3 ml-4'>
                                <LineChartComponent data={BitCoinData} stroke={'#2B2BD4 '} />
                            </div>
                        <div className='flex flex-row gap-3 ml-4 mt-3 text-sm'>
                           <p className='font-bold'>$20,788</p>
                           <p className='text-primary_green font-bold'>+0.25%</p>    
                        </div>    
                 </div>
                 <div className='bg-white drop-shadow-lg w-36 h-48 rounded-lg cursor-pointer'>
                     <div className='flex flex-row m-4 gap-2'>
                      <div className='bg-secondary_yellow w-9 h-9 rounded-full grid place-items-center    '>
                         <FaEthereum className='text-white text-xl' />
                      </div>
                      <div>
                          <p>ETH</p>
                          <p className='opacity-50'>Etherium</p>
                      </div>
                      </div>

                      <div className='mt-3 ml-4'>
                          <LineChartComponent data={EtheriumData} stroke={'#FE9E43'} />
                      </div>
                      
                      <div className='flex flex-row gap-3 ml-4 mt-3 text-sm'>
                           <p className='font-bold'>$21,543</p>
                           <p className='text-primary_green font-bold'>+1.56%</p>    
                        </div> 
                 </div>
           </div>
           <div className='mt-8 ml-5'>
               <p>Live Prices</p>
               <div className='flex flex-row gap-8'>
               <div className='flex flex-row mt-3'>
                   <div className='w-10 h-10 bg-primary_green rounded-full grid place-items-center'>
                   <svg height="30px" version="1.1" viewBox="0 0 256 256" width="30px"><title/><desc/><defs/><g fill="none"  fill-rule="evenodd" id="Classic" stroke="none" stroke-width="1"><g fill="white" id="Binance-Coin" transform="translate(-1570.000000, -2488.000000)"><g transform="translate(1570.000000, 2488.000000)"><polygon id="Fill-3" points="8.30912153 147.721013 48.4291093 147.721013 48.4291093 107.601025 8.30912153 107.601025" transform="translate(28.369115, 127.661019) rotate(-45.000000) translate(-28.369115, -127.661019) "/><polygon id="Fill-3" points="206.892929 147.721013 247.012917 147.721013 247.012917 107.601025 206.892929 107.601025" transform="translate(226.952923, 127.661019) rotate(-45.000000) translate(-226.952923, -127.661019) "/><polygon id="Fill-3" points="107.601025 147.721013 147.721013 147.721013 147.721013 107.601025 107.601025 107.601025" transform="translate(127.661019, 127.661019) rotate(-45.000000) translate(-127.661019, -127.661019) "/><path d="M182.826002,42.9100781 L182.826002,22.8500842 L72.4960362,22.8500842 L72.4960362,62.970072 L142.706015,62.970072 L142.706015,133.180051 L182.826002,133.180051 L182.826002,42.9100781 Z" id="Combined-Shape" transform="translate(127.661019, 78.015067) rotate(-45.000000) translate(-127.661019, -78.015067) "/><path d="M182.826002,142.201982 L182.826002,122.141988 L72.4960362,122.141988 L72.4960362,162.261976 L142.706015,162.261976 L142.706015,232.471954 L182.826002,232.471954 L182.826002,142.201982 Z" id="Combined-Shape" transform="translate(127.661019, 177.306971) rotate(-225.000000) translate(-127.661019, -177.306971) "/></g></g></g></svg>
                   </div>
                   <div className='ml-2'>
                     <p>Binance</p>
                     <p className='opacity-50'>BNB</p>
                   </div>
               </div>
                 <div className='mt-5 flex flex-row'>
                <LineChartComponent data={BinanceData} stroke={'#9CCEA6'} />
                <div className='ml-8'>
                      <p className='font-bold'>$18,788</p>
                      <p className='text-sm ml-3 text-primary_green font-bold'>+0.15%</p>
                </div>
                </div>
            
               </div>

               <div className='flex flex-row gap-8'>
               <div className='flex flex-row mt-3'>
                   <div className='w-10 h-10 bg-primary_blue rounded-full grid place-items-center'>
                   <svg height="30px" version="1.1" viewBox="0 0 256 256" width="30px"><title/><desc/><defs/><g fill="none"  fill-rule="evenodd" id="Classic" stroke="none" stroke-width="1"><g fill="white" id="Binance-Coin" transform="translate(-1570.000000, -2488.000000)"><g transform="translate(1570.000000, 2488.000000)"><polygon id="Fill-3" points="8.30912153 147.721013 48.4291093 147.721013 48.4291093 107.601025 8.30912153 107.601025" transform="translate(28.369115, 127.661019) rotate(-45.000000) translate(-28.369115, -127.661019) "/><polygon id="Fill-3" points="206.892929 147.721013 247.012917 147.721013 247.012917 107.601025 206.892929 107.601025" transform="translate(226.952923, 127.661019) rotate(-45.000000) translate(-226.952923, -127.661019) "/><polygon id="Fill-3" points="107.601025 147.721013 147.721013 147.721013 147.721013 107.601025 107.601025 107.601025" transform="translate(127.661019, 127.661019) rotate(-45.000000) translate(-127.661019, -127.661019) "/><path d="M182.826002,42.9100781 L182.826002,22.8500842 L72.4960362,22.8500842 L72.4960362,62.970072 L142.706015,62.970072 L142.706015,133.180051 L182.826002,133.180051 L182.826002,42.9100781 Z" id="Combined-Shape" transform="translate(127.661019, 78.015067) rotate(-45.000000) translate(-127.661019, -78.015067) "/><path d="M182.826002,142.201982 L182.826002,122.141988 L72.4960362,122.141988 L72.4960362,162.261976 L142.706015,162.261976 L142.706015,232.471954 L182.826002,232.471954 L182.826002,142.201982 Z" id="Combined-Shape" transform="translate(127.661019, 177.306971) rotate(-225.000000) translate(-127.661019, -177.306971) "/></g></g></g></svg>
                   </div>
                   <div className='ml-2'>
                     <p>Litecoin</p>
                     <p className='opacity-50'>LTC</p>
                   </div>
               </div>
                 <div className='mt-5 flex flex-row'>
                <LineChartComponent data={BinanceData} stroke={'#2B2BD4'} />
                <div className='ml-8'>
                      <p className='font-bold'>$18,788</p>
                      <p className='text-sm ml-3 text-red-600 font-bold'>-0.18%</p>
                </div>
                </div>
            
               </div>  

               <div className='flex flex-row gap-8'>
               <div className='flex flex-row mt-3'>
                   <div className='w-10 h-10 bg-secondary_yellow rounded-full grid place-items-center'>
                   <FaEthereum className='text-white text-xl' />
                   </div>
                   <div className='ml-0'>
                     <p>Etherium</p>
                     <p className='opacity-50'>ETH</p>
                   </div>
               </div>
                 <div className='mt-5 flex flex-row'>
                <LineChartComponent data={EtheriumData} stroke={'#FE9E43'} />
                <div className='ml-8'>
                      <p className='font-bold'>$21,543</p>
                      <p className='text-sm ml-3 text-primary_green font-bold'>+1.56%</p>
                </div>
                </div>
            
               </div> 
               <div className='flex flex-row gap-8'>
               <div className='flex flex-row mt-3'>
                   <div className='w-10 h-10 bg-black    rounded-full grid place-items-center'>
                   <BsCurrencyBitcoin className='text-white text-xl rotate-[20deg]' />
                   </div>
                   <div className='ml-4'>
                     <p>Bitcoin</p>
                     <p className='opacity-50'>BTC</p>
                   </div>
               </div>
                 <div className='mt-5 flex flex-row'>
                <LineChartComponent data={BinanceData} stroke={'#000000 '} />
                <div className='ml-8'>
                      <p className='font-bold'>$20,788</p>
                      <p className='text-sm ml-3 text-primary_green font-bold'>+0.25%</p>
                </div>
                </div>
            
               </div>   
           </div>
           
           
        </div>
    )
}

export default RightSidebar;