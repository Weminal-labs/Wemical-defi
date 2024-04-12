import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar className="bg-transparent fixed" maxWidth="xl">
      <NavbarBrand>
        <Image alt="logo" src="/logos/wemical.svg" radius="none"/>
      </NavbarBrand>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="rounded-full bg-white text-black">
            Connect wallet
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
