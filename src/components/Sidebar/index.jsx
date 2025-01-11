import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Dashboard" />
        <SidebarItem Icon={FaChartBar} Text="Cadastro de contas a pagar" />
        <SidebarItem Icon={FaChartBar} Text="Cadastro de contas a receber" />
        <SidebarItem Icon={FaIdCardAlt} Text="Cadastro de clientes" />
        <SidebarItem Icon={FaIdCardAlt} Text="Cadastro de fornecedores" />
        {/* <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" /> */}
      </Content>
    </Container>
  )
}

export default Sidebar