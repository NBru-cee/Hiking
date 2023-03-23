import React from "react";

const NavLinks = () => {
    const links = [
        { name: "Location", link: "/" },
        { name: "Blogs", link: "#blogs" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Contact", link: "#contact" },
    ];
    return (
        <>
            {links.map((link, i) => (
                <li key={i} className="font-medium hover:text-primary">
                    <a href={link.link}>{link.name}</a>
                </li>
            ))}
        </>
    );
};

export default NavLinks;
