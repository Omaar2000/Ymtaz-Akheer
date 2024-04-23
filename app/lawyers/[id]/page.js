"use client";
import Component1 from "@/app/components/component1";
import Component2 from "@/app/components/component2";
import Star from "@/app/components/star";
import Link from "next/link";
import { useState } from "react";

const Details = () => {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <>
      <div className="details flex gap-4 mx-8 xl:flex-row sm:flex-col-reverse">
        {/* First section */}
        <div className="xl:w-1/2 md:w-full mb-4">
          <div className="bg-[#f9f9f9] rounded">
            <div className="h-full flex flex-col">
              <div className="mb-0.5 bg-[#fff]">
                <h2 className="text-xl font-semibold text-end mr-8 my-4">
                  معلومات الحجز
                </h2>
                <div
                  className="flex flex-col items-center"
                  style={{ marginBottom: "-2px" }}
                >
                  <div className="flex">
                    <button
                      className={`font-semibold px-4 py-4 mr-2 ${
                        activeButton === 2
                          ? "text-gray-200 "
                          : "border-b-2 border-[#2d4768]"
                      }`}
                      onClick={() => setActiveButton(1)}
                    >
                      أوقات العمل
                    </button>
                    <button
                      className={`font-semibold px-4 py-4 ml-2 ${
                        activeButton === 2
                          ? "border-b-2 border-[#2d4768]"
                          : "text-gray-200 "
                      } `}
                      onClick={() => setActiveButton(2)}
                    >
                      أسعار الخدمات
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff] pt-4 flex flex-col">
                {activeButton === 2 ? <Component1 /> : <></>}
                {activeButton === 2 ? <Component1 /> : <Component2 />}
                {activeButton === 2 ? <Component1 /> : <></>}
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-1/2 md:w-full">
          <div className="bg-[#f9f9f9] rounded">
            <div className="h-full flex flex-col ">
              <div className="mb-4 bg-[#fff]">
                <h2 className="text-2xl font-semibold text-end mr-8 my-4">
                  المعلومات الشخصية
                </h2>

                <div className=" mb-4 iconBox">
                  <div className="name flex gap-2 mb-2 mr-8 justify-end">
                    <div className="flex flex-col gap-2 items-end mt-2">
                      <h6 className="text-sm font-semibold ">
                        عبدالعزيز عبدالرحمن الربعي
                      </h6>

                      <div className="flex items-center">
                        <img src="../../crown.png" alt="" className="w-4 h-4" />
                        <h6 className="text-sm font-light mx-2 text-[#999888]">
                          مستشار قانوني
                        </h6>
                      </div>

                      {/* lkaknsdfkljadsklfjkladsklfadsfasdf;asdjfl;adsjfljdaslfj;lajskf;ldasjf */}
                      {/* lkaknsdfkljadsklfjkladsklfadsfasdf;asdjfl;adsjfljdaslfj;lajskf;ldasjf */}
                      {/* lkaknsdfkljadsklfjkladsklfadsfasdf;asdjfl;adsjfljdaslfj;lajskf;ldasjf */}
                      {/* lkaknsdfkljadsklfjkladsklfadsfasdf;asdjfl;adsjfljdaslfj;lajskf;ldasjf */}
                      <div className="flex items-center">
                        <Link href="/">أظهر التقييمات</Link>

                        <h6 className="text-sm font-light mx-2 text-[#999888]">
                          التقييم العام من 154 من العملاء (5.00)
                        </h6>
                        <div className="stars flex gap-1">
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                        </div>
                      </div>
                      <div className=" bg-[#f9f9f9] py-4 px-4 rounded-br-xl rounded-tl-xl">
                        <div className="flex items-center mb-8">
                          <h6 className="text font-light mx-2  text-[#999888] ">
                            تميز الاستشاري بالاحترافية والخبرة العالية في
                            المسائل القانونية
                          </h6>
                          <svg
                            width="17"
                            height="12"
                            viewBox="0 0 17 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5552 11.8C12.4502 11.8788 12.3306 11.9361 12.2034 11.9687C12.0762 12.0013 11.9438 12.0085 11.8138 11.9899C11.6838 11.9714 11.5588 11.9274 11.4458 11.8605C11.3328 11.7936 11.234 11.7051 11.1552 11.6C11.0765 11.4949 11.0191 11.3754 10.9865 11.2482C10.9539 11.121 10.9467 10.9886 10.9653 10.8586C10.9839 10.7286 11.0279 10.6035 11.0948 10.4905C11.1617 10.3775 11.2502 10.2788 11.3552 10.2C12.9192 9.027 13.8152 7.886 14.3282 6.89C13.6239 7.07132 12.8805 7.02869 12.2015 6.76805C11.5225 6.5074 10.9415 6.04169 10.5394 5.43564C10.1372 4.82959 9.93388 4.11331 9.95759 3.38636C9.98131 2.65942 10.2309 1.95792 10.6717 1.37937C11.1125 0.800824 11.7226 0.37397 12.4171 0.158142C13.1117 -0.0576859 13.8563 -0.0517654 14.5473 0.175079C15.2384 0.401924 15.8416 0.838423 16.2731 1.42391C16.7047 2.00939 16.9431 2.71477 16.9552 3.442C17.0834 4.67007 16.909 5.91084 16.4472 7.056C15.8502 8.562 14.6832 10.204 12.5552 11.8ZM3.55525 11.8C3.45019 11.8788 3.33064 11.9361 3.20343 11.9687C3.07621 12.0013 2.94382 12.0085 2.81382 11.9899C2.68382 11.9714 2.55875 11.9274 2.44575 11.8605C2.33275 11.7936 2.23404 11.7051 2.15525 11.6C2.07645 11.4949 2.01912 11.3754 1.98653 11.2482C1.95394 11.121 1.94672 10.9886 1.96529 10.8586C1.98387 10.7286 2.02786 10.6035 2.09477 10.4905C2.16168 10.3775 2.25019 10.2788 2.35524 10.2C3.91924 9.027 4.81524 7.886 5.32825 6.89C4.62387 7.07132 3.88051 7.02869 3.20149 6.76805C2.52246 6.5074 1.9415 6.04169 1.53936 5.43564C1.13722 4.82959 0.933878 4.11331 0.957596 3.38636C0.981314 2.65942 1.23091 1.95792 1.6717 1.37937C2.11249 0.800824 2.72258 0.37397 3.41715 0.158142C4.11172 -0.0576859 4.85628 -0.0517654 5.54733 0.175079C6.23839 0.401924 6.8416 0.838423 7.27314 1.42391C7.70467 2.00939 7.94309 2.71477 7.95525 3.442C8.08338 4.67007 7.90897 5.91084 7.44724 7.056C6.84925 8.562 5.68325 10.204 3.55525 11.8Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center">
                          <h6 className="text-sm font-light text-[#999888]">
                            الخميس 3 فبراير 2024
                          </h6>
                          <h6 className="text-sm font-light mx-8 text-[#999888]">
                            Abdullah Faleh
                          </h6>
                          <div className="stars flex gap-1">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full overflow-hidden ml-2 w-24 h-24 bg-gray-200">
                      <img
                        src="../../person.png"
                        alt="img"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] mb-4">
            <div className="h-full flex flex-col ">
              <div className="">
                <h2 className="text-2xl font-semibold text-end mr-8 my-4">
                  النبذة التعريفية
                </h2>
                <h6 className="text-normal font-light mx-8 ml-32 mb-8 text-end text-[#999888] ">
                  استشاري القانون عبد العزيز عبد الرحمن الربعي وهو محام مرخص في
                  المملكة العربية السعودية، يحمل درجة البكالوريوس في القانون.
                  يتمتع بخبرة تبلغ سنتين في مجال ممارسة القانون
                </h6>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] mb-4">
            <div className="h-full flex flex-col ">
              <h2 className="text-2xl font-semibold text-end mr-8 my-4">
                :تقييم العملاء
              </h2>

              <div className="flex gap-4 justify-around">
                <div className="flex flex-col items-center justify-center mb-4">
                  <div className="flex gap-1 px-3 py-1 bg-[#E2A03F] text-white rounded">
                    5/5
                  </div>
                  <h6 className="text font-light mx-2   text-[#999888]">
                    تقييم الاستشاري
                  </h6>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <h6 className="text font-light mx-2    text-[#999888]">
                    تقييم المنصة
                  </h6>
                </div>
                <div className="flex flex-col items-center flex-0">
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <h6 className="text font-light mx-2    text-[#999888]">
                    التقييم العام من 154 من العملاء
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] mb-1">
            <div className="h-full flex flex-col ">
              <div className="flex gap-4 justify-around my-6">
                <div className="flex flex-col items-center justify-center ">
                  <div className="flex gap-1 px-3 py-1 bg-[#E2A03F] text-white rounded">
                    5
                  </div>
                  <h6 className="text font-light mx-2   text-[#999888]">
                    تقييم الاستشاري
                  </h6>
                </div>
                <div className="flex flex-col items-end w-3/5 mr-4">
                  <div className="flex gap-1">
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                  </div>
                  <h6 className="text font-light mt-2 mr-2 text-[#999888]">
                    التقييم العام
                  </h6>
                  <h6 className="text font-light mt-2 mr-2 text-[#999888] text-end">
                    استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا
                    القانونية والفقهية
                  </h6>
                  <h6 className="text-xs font-light mt-2 mr-2 text-[#999888]">
                    عبدالله فالح
                  </h6>
                  <h6 className="text-xs font-light mt-2 mr-2 text-[#999888]">
                    الخميس 3 فبراير 2024
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] mb-8">
            <div className="h-full flex flex-col ">
              <div className="flex gap-4 justify-around my-6">
                <div className="flex flex-col items-center justify-center ">
                  <div className="flex gap-1 px-3 py-1 bg-[#E2A03F] text-white rounded">
                    5
                  </div>
                  <h6 className="text font-light mx-2   text-[#999888]">
                    تقييم الاستشاري
                  </h6>
                </div>
                <div className="flex flex-col items-end w-3/5 mr-4">
                  <div className="flex gap-1">
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                  </div>
                  <h6 className="text font-light mt-2 mr-2 text-[#999888]">
                    التقييم العام
                  </h6>
                  <h6 className="text font-light mt-2 mr-2 text-[#999888] text-end">
                    استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا
                    القانونية والفقهية
                  </h6>
                  <h6 className="text-xs font-light mt-2 mr-2 text-[#999888]">
                    عبدالله فالح
                  </h6>
                  <h6 className="text-xs font-light mt-2 mr-2 text-[#999888]">
                    الخميس 3 فبراير 2024
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
