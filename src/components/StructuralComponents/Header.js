import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem
} from "@nextui-org/react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        ["Home", "/"],
        ["Blog", "/blog"],
        ["Join", "/join"],
        ["Contact", "/contact"],
        ["Donate", "/donate"],
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" underline="none" className="font-bold text-inherit">Larry Rowbs Foundation</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/blog">
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/join" color="foreground">
                        Join
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contact" color="foreground">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden sm:flex">
                    <Button as={Link} color="success" href="/donate" variant="flat">
                        Donate
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link
                            color={
                                item[0] === "Donate" ? "success" : "foreground"
                            }
                            className="w-full"
                            href={item[1]}
                            size="lg"
                        >
                            {item[0]}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
