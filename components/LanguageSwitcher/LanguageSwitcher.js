import React from 'react';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import TranslateRoundedIcon from '@material-ui/icons/TranslateRounded';
import { useRouter } from 'next/router'
const actions = [
  { icon: <img src="/images/french-flag.webp" className="img-choice"/>, name: 'French',locale:'fr' },
  { icon: <img src="/images/english-flag.webp"  className="img-choice"/>, name: 'English',locale:'en' },
];

export default function LanguageSwitcher() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  const changeLocale = (locale)=>{
      router.push(router.pathname,router.pathname,{locale})
      handleClose()
  }
  return (
      <div className="languageSwitcherContainer">
          <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        hidden={hidden}
        icon={<TranslateRoundedIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={()=>changeLocale(action.locale)}
          />
        ))}
      </SpeedDial>
      </div>
  )
        }