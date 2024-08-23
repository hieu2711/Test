import icon1 from "../../assets/image/snsicon-01.png"
import icon2 from "../../assets/image/snsicon-02.png"
import icon3 from "../../assets/image/snsicon-03.png"
function Footer() {
    return ( 
        <footer className="px-12">
            <p className="bg-[#f4f4f4] border-t-[1px] border-[#f4f4f4] my-4"></p>
            <div className="flex flex-col sm:flex-row  justify-between  text-[14px]">
                  {/*LEFT SIDE */}
                <div className="w-[260px] h-[135px]  leading-[2.14]">
                    <p className="font-bold">what happened</p>
                    <span className="font-NotoSansCJKkr font-light text-left " >
                        [공지] 개인 정보 처리 방침 변경 사전 안내 <br/>
                        [공지] 29CM 강남 스토어 영업 종료 <br/>
                        [공지] 개인 정보 처리 방침 변경 사전 안내 <br/>
                        [공지] iOS 10 이하 버전 지원 중단 안내 <br/>
                        [공지] 개인 정보 처리 방침 변경 사전 안내 <br/>
                    </span>
                </div>
                 {/*Right SIDE */}
                <div className="flex flex-col sm:flex-row gap-8 mt-12 sm:mt-0 ">
                    <div className="w-[128px] h-auto font-light leading-[2.21]">
                        <h1 className="font-bold">about us</h1>
                        <span className="text-left">
                            회사 소개 <br />
                            인재 채용 <br />
                            상시 할인 혜택 <br />
                            </span>
                    </div>

                    <div className="w-[140px] h-auto font-light leading-[2.21] ">
                        <h1 className="font-bold">my order</h1>
                        <span className="text-left">
                        내 주문 <br />
                        주문 배송 <br />
                        취소 / 교환 / 반품 내역 <br />
                        상품 리뷰 내역 <br />
                        증빙 서류 발급 <br />
                            </span>
                    </div>

                    <div className="w-[102px] h-auto font-light leading-[2.21] ">
                        <h1 className="font-bold">my account</h1>
                        <span className="text-left">
                        회원 정보 수정 <br />
                        회원 등급 <br />
                        마일리지 현황 <br />
                        쿠폰 <br />
                            </span>
                    </div>

                    <div className="w-[105px] h-auto font-light leading-[2.21] ">
                        <h1 className="font-bold">help</h1>
                        <span className="text-left">
                        1 : 1 상담 내역 <br />
                        상품 Q & A 내역 <br />
                        공지 사항 <br />
                        자주하는 질문 <br />
                        고객의 소리 <br />
                            </span>
                    </div>
                </div>
            </div>

            <p className="bg-[#f4f4f4] border-t-[1px] border-[#f4f4f4] my-4 sm:my-8"></p>

            <div className="flex flex-col sm:flex-row  gap-5">
                <div className="w-full h-auto">
                    <span class="text-[#a9a9a9] leading-[1.71] text-left font-light font-NotoSansCJKkr">
                        © 2020-2021 what happened corp  l  (주) 왓헤픈<span class="text-style-1">｜</span>
                        대표자 : 홍길<span class="text-style-2">｜</span>
                        사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr <br/>
                        서울특별시 강남구 도산대로 8길 1<span class="text-style-3">｜</span>
                        FAX : 070-0000-0000  l  서비스 이용약관
                        <span class="text-style-4">개인정보처리방침</span>
                    </span>
                </div>
                <div className="flex gap-3  cursor-pointer ">
                <img src={icon1} alt="icon1" className="w-5 h-5"/>
                    <img src={icon2} alt="icon2" className="w-5 h-5"/>
                    <img src={icon3} alt="icon3" className="w-5 h-5"/>
                </div>
            </div>
        </footer>
     );
}

export default Footer;