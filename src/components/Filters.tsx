import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useState } from 'react';
import '../assets/css/filters.css';
import useStore from '~/store/store';

function Filters() {
 const [rating, setRating] = useState<string>('');
 const sortRating = useStore((s) => s.sortRating);

 //@ts-ignore
 const handleChange = (event, newAlignment) => {
  if (newAlignment !== null) {
   setRating(newAlignment);
  }
 };

 useEffect(() => {
  sortRating(rating);
 }, [rating]);

 return (
  <div className="border">
   <span className="flex justify-center text-center text-[26px] font-700 mb-[10px]">
    Filters
   </span>
   <div className="filters-style sticky top-0">
    <div className="flex justify-center">
     <ToggleButtonGroup
      color="primary"
      value={rating}
      exclusive
      onChange={handleChange}
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
