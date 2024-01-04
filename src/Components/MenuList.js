import { FaHome,FaHotjar, FaHeart   } from "react-icons/fa";
import { TbPremiumRights } from "react-icons/tb";
import { BsPersonGear } from "react-icons/bs";


const MenuList = [
    {
        id:1,
        icon:<FaHome/>,
        name:'Home',
    },

    {
        id:2,
        icon:<FaHotjar/>,
        name:'Trending',
    },

    {
        id:3,
        icon:<FaHeart/>,
        name:'Favorites',
    },

    {
        id:4,
        icon:<TbPremiumRights/>,
        name:'Premium',
    },

    {
        id:5,
        icon:<BsPersonGear/>,
        name:'Be an artist',
    }

]

export {MenuList}
