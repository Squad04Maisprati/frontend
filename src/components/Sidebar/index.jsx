import { Container, Content, ContentWrapper, StyledLink } from './styles';
import { 
  FaTimes, 
  FaHome, 
  FaIdCardAlt, 
  FaChartBar,
  FaBriefcaseMedical,
  FaBuilding
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SidebarItem from '../SidebarItem';

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <ContentWrapper>
          <StyledLink to="/dashboard">
            <SidebarItem Icon={FaHome} Text="Dashboard" />
          </StyledLink>
          <StyledLink to="/contas-pagar">
            <SidebarItem Icon={FaChartBar} Text="Cadastro de contas a pagar" />
          </StyledLink>
          <StyledLink to="/contas-receber">
            <SidebarItem Icon={FaChartBar} Text="Cadastro de contas a receber" />
          </StyledLink>
          <StyledLink to="/cadastro-contas">
            <SidebarItem Icon={FaIdCardAlt} Text="Cadastro de Contas" />
          </StyledLink>
          <StyledLink to="/cadastro-banco">
            <SidebarItem Icon={FaBuilding} Text="Cadastro de bancos" />
          </StyledLink>
          <StyledLink to="/emergency-savings">
            <SidebarItem Icon={FaBriefcaseMedical} Text="Reserva de emergência" />
          </StyledLink>
        </ContentWrapper>
      </Content> 
    </Container>
  );
};

export default Sidebar;
