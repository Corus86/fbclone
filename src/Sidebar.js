import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from "@material-ui/icons"
import { useStateValue } from "./StateProvider"

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Delta+ Info" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Groups & Games"/>
            <SidebarRow Icon={PeopleIcon} title="Other's Friends"/>
            <SidebarRow Icon={ChatIcon} title="Texting Simulator"/>
            <SidebarRow Icon={StorefrontIcon} title="Farmer's Market"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Youtube"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="More Stuff For You!"/>
        </div>
    )
}

export default Sidebar
