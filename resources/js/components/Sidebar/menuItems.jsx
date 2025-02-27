import React from "react"
import { useNavigate } from "react-router-dom"
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import ShareIcon from '@mui/icons-material/Share';

export const getMenuItems = () =>{
    const navigate = useNavigate()
    return [
    {
        texto: 'Home',
        acao: () => navigate('/'),
        icone: <HomeIcon />
    },
    {
        texto: 'Links',
        acao: () => navigate('/links'),
        icone: <ShareIcon />
    },
    {
        texto: 'Sobre',
        acao: () => navigate('/about'),
        icone: <InfoIcon />
    },
    {
        texto: 'Usuários',
        acao: () => navigate('/usuarios'),
        icone: <PeopleIcon />
    },
]
}