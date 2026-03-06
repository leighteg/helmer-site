import { createEffect, createMemo, createSignal, Match, Show, Switch } from "solid-js"
import "./NavBar.css"
import { useLocation } from "@solidjs/router";
import GitHubLogo from '../../assets/logos/github.svg'
import StoatLogo from '../../assets/logos/stoat-light.svg'

const NavBarItem = (props: { name?: string; icon?: string; path: string }) => {
  const location = useLocation();
  const active = createMemo(() => location.pathname === `/${props.path}`);

  return (
    <a href={`${props.path}`} classList={{ active: active() }}>
      <Show when={props.icon}>
        <img src={props.icon} />
      </Show>
      {props.name}
    </a>
  );
};

const NavBar = () => {
  return (
    <div id="navbar">
      <a id="title" href="/">helmer</a>

      <div id="children">
        <NavBarItem name="features" path="/details" />
        <NavBarItem name="tooling" path="/tools" />
        <NavBarItem name="demos" path="/demos" />
      </div>

      <div id="children-social">
        <NavBarItem icon={GitHubLogo} path="https://github.com/leighteg/helmer" />
        <NavBarItem icon={StoatLogo} path="https://stt.gg/43zc35Aw" />
      </div>
    </div>
  )
}

export default NavBar