import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import './HomePage.css';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sahifa yuklanayotganda 2 soniya kutamiz
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
          <div>
              <p className='adminPanel'>MissDeeTm store</p>
             <center><TextField className='userName_input' id="outlined-basic" label="Foydalanuvchi ismi" variant="outlined" /></center>
             <center><TextField className='password_input' id="outlined-basic" label="Parol" variant="outlined" /></center>
         <button className='btn'>Kirish</button>

          </div>
      

    )}
    </div>
  );
}
