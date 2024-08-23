import mainBanner from '../assets/image/main-banner.png'
import introductionBg from '../assets/image/introduction-bg.png'
import besBg from '../assets/image/bes-bg.png'
import bestImage1 from '../assets/image/best-image-01.png'
import bestImage2 from '../assets/image/best-image-02.png'
import bestImage3 from '../assets/image/best-image-03.png'
import production1 from '../assets/image/producticon-01.png'
import production2 from '../assets/image/producticon-02.png'
import production3 from '../assets/image/producticon-03.png'
import goIcon from '../assets/image/go-icon.png'
import obj1 from '../assets/image/object-01.png'
import obj2 from '../assets/image/object-02.png'
import obj3 from '../assets/image/object-03.png'
import obj4 from '../assets/image/object-04.png'
import obj5 from '../assets/image/object-05.png'
import obj6 from '../assets/image/object-06.png'
import obj7 from '../assets/image/object-07.png'
import newobj1 from '../assets/image/news-img-01.png'
import newobj2 from '../assets/image/news-object-02.png'
import newobj3 from '../assets/image/news-object-03.png'
import newobj4 from '../assets/image/news-object-04.png'
import newobj5 from '../assets/image/news-object-05.png'
import newobj6 from '../assets/image/news-object-06.png'
import videoobj1 from '../assets/image/video-object-01.png'
import videoobj2 from '../assets/image/video-object-02.png'
import videoobj3 from '../assets/image/video-object-03.png'
import videoobj5 from '../assets/image/video-object-05.png'
import videoobj6 from '../assets/image/video-object-06.png'
import videoobj7 from '../assets/image/video-object-07.png'
import videoobj9 from '../assets/image/video-object-09.png'
import video from '../assets/image/video.png'
import newImage5 from '../assets/image/news-img-05.png'
import window from '../assets/image/window.png'
import Item from '../components/Item/Item'
import { listProduct } from '../utils/products'
function Home() {
    return ( 
        <div>
            {/* Main Banner */}
            <div>
                <img  src={mainBanner} alt="mainBanner" />
            </div>
             {/* Introduction BG */}
            <div className="relative text-white">
                <img src={introductionBg} alt="introductionBg" />
                <div className="absolute mt-10 top-20 left-20 max-w-xl">
                    <h1 className="text-5xl font-bold mb-8">WHAT HAPPENED!</h1>
                    <p className="leading-relaxed text-xl">
                        How to create mobile-optimized videos in minutes. Not a designer, 
                        every team makes a lot of videos Can be trimmed. Take the first 
                        step to your brand's success. How to create mobile-optimized videos in minutes.
                    </p>
                </div>
            </div>
             {/* Bes BG */}
            <div className="relative">
                <img src={besBg} alt="besBg" className="w-full" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
                    <h2 className="text-[50px] font-bold text-[#f96400] mb-6">BEST PRODUCT</h2>
                    <p className="max-w-3xl mx-auto text-xl text-[#f96400]">
                        How to create mobile-optimized videos in minutes. Not a designer, 
                        every team makes a lot of videos Can be trimmed. Take the first 
                        step to your brand's success. How to create mobile-optimized videos in minutes.
                    </p>
                    <div className="flex justify-center mt-10">
                        {/* Product 01 */}
                        <div className="relative max-w-[300px]">
                            <img src={bestImage1} alt="Product 01" className="w-full" />
                            <div className="absolute top-[-35px] left-[35px]  transform -translate-x-1/2  w-20 h-20 ">
                                <img src={production1} alt='production1' />
                            </div>
                            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white p-2 flex justify-between items-center border-2 border-black w-4/5">
                                <span className="text-black font-bold text-left">How to create mobile-optimized</span>
                                <img src={goIcon} alt="Go Icon" className="w-12 h-12" />
                            </div>
                        </div>
                        {/* Product 02 */}
                        <div className="relative max-w-[300px]">
                            <img src={bestImage2} alt="Product 02" className="w-full" />
                            <div className="absolute top-[-35px] left-[35px] transform -translate-x-1/2  w-20 h-20 ">
                                <img src={production2} alt='production2' />
                            </div>
                            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white p-2 flex justify-between items-center border-2 border-black w-4/5">
                                <span className="text-black font-bold text-left">How to create mobile-optimized</span>
                                <img src={goIcon} alt="Go Icon" className="w-12 h-12" />
                            </div>
                        </div>
                        {/* Product 03 */}
                        <div className="relative max-w-[300px]">
                            <img src={bestImage3} alt="Product 03" className="w-full" />
                            <div className="absolute top-[-35px] left-[35px] transform -translate-x-1/2  w-20 h-20">
                                <img src={production3} alt='production3' />
                            </div>
                            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white p-2 flex justify-between items-center border-2 border-black w-4/5">
                                <span className="text-black font-bold text-left">How to create mobile-optimized</span>
                                <img src={goIcon} alt="Go Icon" className="w-12 h-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* Products */}
             <div className='flex flex-col justify-center items-center gap-6'>
                <div className='flex justify-center items-center mt-14'>
                    <div className="grid grid-cols-5 gap-2 max-w-5xl mx-auto">
                        {listProduct.map((item, index) =>{
                            return (
                                <Item key={index}  image={item.image} />
                            )
                        })}
                    </div>
                    
                </div>
                <div>
                    <button className='border-[3px] font-bold p-2  border-black inline-block'>SEE MORE</button>
                </div>
            </div>

            {/* Brand story */}
            <div className="bg-cl_blue h-[666px] text-center py-20 relative mt-10">
                <div className="absolute left-[220px] top-[150px]">
                    <img src={obj1} alt="Item 1" className="w-full h-auto" />
                </div>
                <div className="absolute right-[330px] top-0">
                    <img src={obj2} alt="Item 2" className="w-full h-auto" />
                </div>
                <div className="absolute right-[220px] top-10">
                    <img src={obj3} alt="Item 3" className="w-full h-auto" />
                </div>
                <div className="absolute right-[-50px] top-[100px]">
                    <img src={obj4} alt="Item 2" className="w-full h-auto" />
                </div>
                <div className="absolute right-0 top-[400px]">
                    <img src={obj5} alt="Item 3" className="w-full h-auto" />
                </div>
                <div className="absolute left-0 top-[270px]">
                    <img src={obj6} alt="Item 2" className="w-full h-auto" />
                </div>
                <div className="absolute left-[200px] top-[350px]">
                    <img src={obj7} alt="Item 3" className="w-full h-auto" />
                </div>
                <div className="absolute left-1/2 top-[340px] transform -translate-x-1/2">
                    <img src={window} alt="window" className="w-full h-auto" />
                </div>
                <h1 className="text-[#fcd32a] text-5xl font-bold mt-[100px]">BRAND STORY</h1>
                <p className="text-[#fcd32a] mt-5 text-base">
                    마케터에 세상에 첫 비디오를 본 랜 영상 제작하세요. 디자이너가 아니더라도
                </p>
                <div className='absolute right-5 top-[400px] transform -translate-x-1/2 z-20'>
                    <h3 className='font-bold text-lg uppercase'>What Happened’s Brand Story</h3>
                    <p className='w-[60%] mx-auto text-left'>
                        청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 
                    </p>
                     <button className="border-2 border-black py-2 px-4 font-bold mt-4 ">SEE MORE</button>
                </div>
            </div>
                {/* Brand  */}
            <div className="bg-[#fccb05] h-[800px] text-center py-20 relative">
                <div className="absolute right-[160px] top-[150px]">
                    <img src={newobj2} alt="Item 2" className="w-full h-auto" />
                </div>
                <div className="absolute right-[150px] top-10">
                    <img src={newobj3} alt="Item 3" className="w-full h-auto" />
                </div>
                <div className="absolute left-[140px] bottom-[100px]">
                    <img src={newobj4} alt="Item 2" className="w-full h-auto" />
                </div>
                <div className="absolute right-[260px] bottom-[100px]">
                    <img src={newobj5} alt="Item 3" className="w-full h-auto" />
                </div>
                <div className="absolute left-[300px] top-[250px]">
                    <img src={newobj6} alt="Item 3" className="w-full h-auto" />
                </div>
                <h1 className="text-[#110e03] text-5xl font-bold uppercase">Happened’s issue</h1>
                <p className="text-[#110e03] mt-5 text-base">
                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                </p>
                <button className="border-2 border-black py-2 px-4 font-bold mt-4 mb-14 ">SEE MORE</button>
                <div>
                    <div class="w-full flex border-2 border-black">
                        <div class="flex flex-col w-1/5 gap-2 items-center bg-[#ff5500] justify-center">
                            <h1 className="uppercase text-4xl font-extrabold">whpnissue</h1>
                            <img src={newobj1} alt="newObj1" className="w-20 h-20"/>
                        </div>
                        <div class="flex flex-col w-1/5 items-center">
                            <div className="bg-[#110e03] text-white py-2 w-full uppercase">b brand</div>
                            <img src={newImage5} alt="newImage5" className="w-full"/>
                        </div>
                        <div class="flex flex-col w-1/5 items-center">
                            <div className="bg-[#110e03] text-white py-2 w-full uppercase">c brand</div>
                            <img src={newImage5} alt="newImage5" className="w-full"/>
                        </div>
                        <div class="flex flex-col w-1/5 items-center">
                            <div className="bg-[#ff5500] text-white py-2 w-full uppercase">d brand</div>
                            <img src={newImage5} alt="newImage5" className="w-full"/>
                        </div>
                        <div class="flex flex-col w-1/5 items-center">
                            <div className="bg-[#110e03] text-white py-2 w-full uppercase">e brand</div>
                            <img src={newImage5} alt="newImage5" className="w-full"/>
                        </div>
                    </div>
                </div>
            </div>
                {/* Video  */}
                <div className="bg-white h-[1050px] text-center py-20 relative">
                    <div className="absolute right-[250px] z-20 top-[150px]">
                        <img src={videoobj6} alt="Item 2" className="w-full h-auto" />
                    </div>
                    <div className="absolute right-[150px] top-10">
                        <img src={videoobj7} alt="Item 3" className="w-full h-auto" />
                    </div>
                    <div className="absolute left-[400px] bottom-10 z-20">
                        <img src={videoobj1} alt="Item 2" className="w-full h-auto" />
                    </div>
                    <div className="absolute right-[-200px] bottom-[100px]">
                        <img src={videoobj9} alt="Item 3" className="w-full h-auto" />
                    </div>
                    <div className="absolute left-[300px] top-[0px]">
                        <img src={videoobj5} alt="Item 3" className="w-full h-auto" />
                    </div>
                    <div className="absolute right-[390px] bottom-[160px]">
                        <img src={videoobj2} alt="Item 3" className="w-full h-auto" />
                    </div>
                    <div className="absolute left-[280px] bottom-[200px]">
                        <img src={videoobj3} alt="Item 3" className="w-full h-auto" />
                    </div>
                    <h1 className="text-[#110e03] text-5xl font-bold uppercase">what happened</h1>
                    <p className="text-[#110e03] mt-5 text-base">
                    How to create mobile-optimized videos in minutes.
                    </p>
                    <button className="border-2 border-black py-2 px-4 font-bold mt-4 mb-14 ">SEE MORE</button>
                    <div className="absolute left-1/2  transform -translate-x-1/2">
                        <img src={video} alt="video" className="w-full h-auto" />
                    </div>
            </div>
        </div>
     );
}

export default Home;