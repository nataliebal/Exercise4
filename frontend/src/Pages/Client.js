import React from 'react'
import ClientForm from "./ClientForm"
import PageHeader from '../components/PageHeader';
import GroupIcon from '@mui/icons-material/Group';

export default function Client() {
    return(
        <>
        <PageHeader
            title = "New Client"
            subTitle = "Page description"
            icon = {<GroupIcon fontSize='large'/>}
        />
        <ClientForm/>
        </>
        
    )
}