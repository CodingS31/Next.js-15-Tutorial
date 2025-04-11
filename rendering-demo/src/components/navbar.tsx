import NavbarLinks from "./nav-links";
import NavbarSearch from "./nav-search";

export default function Navbar() {
  console.log("Navbar rendered");

  return (
    <div>
      <NavbarLinks />
      <NavbarSearch />
    </div>
  );
}
