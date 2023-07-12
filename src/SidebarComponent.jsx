import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {BiSolidHomeCircle} from 'react-icons/bi'
import Subdiv from './Subdiv';
import {FiSearch} from 'react-icons/fi';
import {IoNotificationsOutline} from 'react-icons/io5';
import {HiEnvelope} from 'react-icons/hi2';
import {RiFileListFill} from 'react-icons/ri';

function SidebarComponent() {

  const Hometext = "Home";
  const Homelogo = <BiSolidHomeCircle size={30} />
  const searchText = "Explore";
  const searchLogo = <FiSearch size={30} />
  const notifText = "Notifications";
  const notifLogo = <IoNotificationsOutline size={30} />
  const messageText = "Messages";
  const messageLogo = <HiEnvelope size={30} />
  const listText = "Lists";
  const listLogo = <RiFileListFill size={30} />


  return (
    <div className='sidebar-component'>
     <div className="logo-div">
       <BsTwitter size={30} />
     </div>
      <Subdiv logo={Homelogo} text={Hometext} />
      <Subdiv logo={searchLogo} text={searchText} />
      <Subdiv logo={notifLogo} text={notifText} />
      <Subdiv logo={messageLogo} text={messageText} />
      <Subdiv logo={listLogo} text={listText} />
    </div>
  )
}

export default SidebarComponent;
