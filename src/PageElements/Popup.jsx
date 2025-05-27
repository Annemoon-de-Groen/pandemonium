// import { Box, Dialog, DialogTitle, IconButton , DialogContent, DialogActions, Button} from "@mui/material";
// import { useState } from "react";
// import CloseIcon from '@mui/icons-material/Close';

// function Popup(){
//     const [isOpen, setisOpen] = useState(true)

//     return (
//         <Dialog
//         open={isOpen}
//         >
//         <DialogTitle variant="h3" >         
//             <Box display="flex" alignItems="center">
//                 <Box flexGrow={1} className="popup">Drummer gezocht!</Box>
//                 <Box>
//                     <IconButton onClick={() => {setisOpen(false)}}>
//                           <CloseIcon/>
//                     </IconButton>
//                 </Box>
//           </Box></DialogTitle>
//           <DialogContent className="popup">
//             <p>Ben jij een drummer die graag deel wil uitmaken van een gezellige theaterband? Dit is je kans</p>
//           </DialogContent>
//           <DialogActions>
//                  <a href='/contact'>
//                    <button id='koop_kaartje_button' className='button'><span>Contact</span></button> 

//                 </a>
//           </DialogActions>
//         </Dialog>
//     )
// }

// export default Popup