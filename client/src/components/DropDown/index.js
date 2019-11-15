import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{props.children}</DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}



// const Example = (props) => {
//     const [dropdownOpen, setOpen] = useState(false);

//     const toggle = () => setOpen(!dropdownOpen);

//     useEffect(() => {
//         setOpen(false);
//       },[]);


//     return (
//         <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
//             <DropdownToggle>
//                 Button Dropdown
//         </DropdownToggle>
//             <DropdownMenu>
//                 <DropdownItem>{props.children}</DropdownItem>
//             </DropdownMenu>
//         </ButtonDropdown>
//     );
// }

export default Example;