import { useEffect, useRef } from 'react';
import useStore from '~/store/store';

function PopupMore() {
 const popupOpen = useStore((s) => s.popupMore.open);
 const popupData = useStore((s) => s.popupMore.data);
 const closePopupStore = useStore((s) => s.closePopupMore);
 const popupOpenStyle = popupOpen ? 'flex' : 'hidden';
 const wrap = useRef<HTMLDivElement>(null);
 const btnClose = useRef<HTMLButtonElement>(null);
 const btnOk = useRef<HTMLButtonElement>(null);

 const closePopup = (e: React.MouseEvent) => {
  if (
   e.target === wrap.current ||
   e.target === btnClose.current ||
   e.target === btnOk.current
  ) {
   closePopupStore();
  }
 };

 useEffect(() => {
  if (popupOpen) {
   document.body.classList.add('j-lock');
  } else {
   document.body.classList.remove('j-lock');
  }
 }, [popupOpen]);

 return (
  <div
   className={`popup-wrap fixed top-0 left-0 w-full h-dvh bg-[rgba(0,0,0,0.4)] p-[20px_10px] overflow-auto ${popupOpenStyle}`}
   ref={wrap}
   onClick={closePopup}
  >
   <div className="relative flex flex-col w-[400px] bg-[#fff] rounded-[5px] p-[30px_20px_20px] m-auto">
    <span className="text-[24px] font-700 text-center mb-[20px]">
     {popupData?.title}
    </span>
    <div className="grid grid-cols-3 text-[25px] mb-[20px]">
     <span className="self-center flex items-center">
      {popupData?.rating.rate}
      <span className="text-[20px] text-[orange] mt-[-10px]">&#9733;</span>
     </span>
     <img
      className="justify-self-center w-[100px]"
      src={popupData?.image}
      alt=""
     />
     <span className="self-center justify-self-end">{popupData?.price}$</span>
    </div>
    <span className="text-[18px] mb-[20px]">{popupData?.description}</span>
    <button
     ref={btnOk}
     className="self-center text-[20px] text-[#fff] bg-[#000] rounded-[60px] p-[8px_25px]"
    >
     OK
    </button>
    <button
     ref={btnClose}
     className="absolute top-[5px] right-[12px]"
     type="button"
    >
     &#10006;
    </button>
   </div>
  </div>
 );
}

export default PopupMore;
