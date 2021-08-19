import styled from 'styled-components';
const SidebarWrapper = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  .side-bar {
    height: 100%;
    background-color: #444;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .circle {
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      margin: 0.5rem;
      background-color: #fff;
    }
  }
`;
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className='side-bar'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
