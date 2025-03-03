import { NavLink } from "react-router";

export function MyAppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to='/contentCreator' end>
        Content Creator
      </NavLink>
    </nav>
  );
}