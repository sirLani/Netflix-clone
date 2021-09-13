import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Search,
  Picture,
  Dropdown,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Profile,
  Group,
  SearchIcon,
  SearchInput

} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Frame = function HeaderFrame({ children, ...restprops }) {
  return <Container {...restprops}> {children}</Container>;
};
Header.Group = function HeaderGroup({ children, ...restprops }) {
  return <Group {...restprops}> {children}</Group>;
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restprops }) {
  return <ButtonLink {...restprops}> {children}</ButtonLink>;
};
Header.TextLink = function HeaderTextLink({ children, ...restprops }) {
  return <Link {...restprops}> {children}</Link>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
