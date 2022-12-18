import React from "react";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";


export const SidebarData=[
    {
        title: "MOTOR DE REGLAS",
        path: "/",
        icon: <BiIcons.BiRuler />,
        cName: "nav-text",
      },

      {
        title: "DATOS",
        path: "/data",
        
        icon: <MdIcons.MdCalendarViewMonth/>,
        cName: "nav-text",
      },
      {
        title: "CREDITOS",
        path: "/credits",
        icon: < IoIcons.IoIosPaper/>,
        cName: "nav-text",
      }

]