import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import '../assets/css/filters.css';
import useStore from '~/store/store';

function Filters() {
 const [price, setPrice] = useState<string>('');
 const [rating, setRating] = useState<string>('');
 const sortPrice = useStore((s) => s.sortPrice);
 const sortRating = useStore((s) => s.sortRating);

 //@ts-ignore
 const handleChangePrice = (event, newAlignment) => {
  if (newAlignment !== null) {
   setPrice(newAlignment);
   sortPrice(newAlignment);
   setRating('');
  }
 };

 //@ts-ignore
 const handleChangeRating = (event, newAlignment) => {
  if (newAlignment !== null) {
   setRating(newAlignment);
   sortRating(newAlignment);
   setPrice('');
  }
 };

 return (
  <div className="">
   <span className="flex justify-center text-center text-[26px] font-700 mb-[10px]">
    Filters
   </span>
   <div className="filters-style flex flex-col sticky top-[10px] rounded-[10px] border p-[10px]">
    <span className="text-[20px] font-600 text-center mb-[5px]">Price</span>
    <div className="flex justify-center mb-[20px]">
     <ToggleButtonGroup
      color="primary"
      value={price}
      exclusive
      onChange={handleChangePrice}
      aria-label="Platform"
     >
      <ToggleButton value="up">&#129105;</ToggleButton>
      <ToggleButton value="down">&#129107;</ToggleButton>
     </ToggleButtonGroup>
    </div>
    <span className="text-[20px] font-600 text-center mb-[5px]">Rating</span>
    <div className="flex justify-center">
     <ToggleButtonGroup
      color="primary"
      value={rating}
      exclusive
      onChange={handleChangeRating}
      aria-label="Platform"
     >
      <ToggleButton value="up">&#129105;</ToggleButton>
      <ToggleButton value="down">&#129107;</ToggleButton>
     </ToggleButtonGroup>
    </div>
   </div>
  </div>
 );
}

export default Filters;
