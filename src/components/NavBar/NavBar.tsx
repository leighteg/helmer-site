import { createEffect, createMemo, createSignal, Show } from "solid-js"
import "./NavBar.css"
import { useLocation } from "@solidjs/router";

const NavBarItem = (props: { name: string; path: string }) => {
  const location = useLocation();
  const active = createMemo(() => location.pathname === `/${props.path}`);

  return (
    <a href={`/${props.path}`} classList={{ active: active() }}>
      {props.name}
    </a>
  );
};

const NavBar = () => {
    return (
        <div id="navbar">
            <a id="title" href="/">helmer</a>

            <div id="children">
                <NavBarItem name="features" path="details" />
                <NavBarItem name="demos" path="demos" />
            </div>
        </div>
    )
}

export default NavBar