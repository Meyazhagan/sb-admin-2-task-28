export const NavList = [
  {
    divider: true,
  },
  {
    sidebarHeading: "Interface",
  },
  {
    navItem: "Pages",
  },
];

<div id="wrapper">
  <Nav
    classes="bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <SidebarBrand>
      <div class="sidebar-brand-text mx-3">
        SB Admin <sup>2</sup>
      </div>
    </SidebarBrand>
    <Divider />
    <NavItem>
      <NavLink path="/">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </NavLink>
    </NavItem>
    <Divider />
    <div class="sidebar-heading">Interface</div>
    <NavItem>
      <NavLink
        classes="collapsed"
        path="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>Components</span>
      </NavLink>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Custom Components:</h6>
          <Link classes="collapse-item" path="/components/buttons">
            Buttons
          </Link>
          <Link classes="collapse-item" path="/components/cards">
            Cards
          </Link>
        </div>
      </div>
    </NavItem>
    <NavItem>
      <NavLink
        classes="collapsed"
        path="#"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        {" "}
        <i class="fas fa-fw fa-wrench"></i>
        <span>Utilities</span>
      </NavLink>
    </NavItem>
  </Nav>
</div>;
