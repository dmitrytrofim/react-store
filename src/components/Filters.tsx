import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Filters() {
 return (
  <div className="border">
   <div className="sticky top-0">
    <Checkbox {...label} defaultChecked />
   </div>
  </div>
 );
}

export default Filters;
