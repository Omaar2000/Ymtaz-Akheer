import Star from "./star";

const Component1 = () => {
  return (
    <div className="mb-4 p-4 mx-auto rounded w-3/5 bg-[#F9f9f9] flex flex-col items-center">
      <div className="flex">
        <div className="flex flex-col items-end w-1/3  my-2">
          <h6 className="text-sm font-semibold text-end ">سعر الخدمة</h6>
          <div className="flex gap-1 mt-2">
            <h6 className="text font-semibold text-[#3FD06F]"> ر.س</h6>
            <h6 className="text-xl font-semibold text-[#3FD06F]"> 300</h6>
          </div>
        </div>
        <div className="h-full flex flex-col items-end">
          <div className="w-4/5 mr-4">
            <h6 className=" font-semibold text-end ">
              خدمة الاستشارة الهاتفية
            </h6>
            <h6 className="text-normal font-light mb-8 text-end text-[#999888] ">
              وتقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة
            </h6>
          </div>
        </div>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2847 21.7827C17.3304 23.7371 12.3255 21.9007 8.10593 17.6812C3.88638 13.4616 2.05005 8.45673 4.00436 6.5024L5.29113 5.21564C6.17945 4.32731 7.6432 4.35079 8.56049 5.26808L10.5536 7.26117C11.4709 8.17847 11.4944 9.64221 10.606 10.5305L10.3296 10.8069C9.85003 11.2865 9.8031 12.0603 10.2488 12.6003C10.6786 13.1212 11.1421 13.6401 11.6445 14.1426C12.147 14.6451 12.6659 15.1085 13.1868 15.5384C13.7268 15.984 14.5006 15.9371 14.9802 15.4575L15.2566 15.1811C16.1449 14.2928 17.6086 14.3162 18.5259 15.2335L20.519 17.2266C21.4363 18.1439 21.4598 19.6077 20.5715 20.496L19.2847 21.7827Z"
            stroke="#DDB762"
            stroke-width="1.5"
          />
          <path
            d="M17.8491 10.5643C17.6051 9.96909 17.2415 9.41147 16.7582 8.9282C16.3022 8.47222 15.7801 8.12275 15.2226 7.87979"
            stroke="#DDB762"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M15.2227 4.47689C16.5573 4.96039 17.8096 5.73713 18.8796 6.80712C19.9764 7.90396 20.7651 9.19231 21.2456 10.5646"
            stroke="#DDB762"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <button className="bg-[#ddb762] font-semibold px-20 text-white py-1 rounded">
        طلب الخدمة
      </button>
    </div>
  );
};

export default Component1;
