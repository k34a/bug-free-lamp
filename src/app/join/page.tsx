import React from "react";
import JoinUs from "@/components/Forms/join-us";
import OurTeam from "@/components/Team/OurTeam";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Join us- Larry Rowbs Foundation",
    description:
        "The members of the Larry Rowbs Foundation are guided by their core values, which emphasize community, collaboration, and love. ... Join our Family.",
};

export default function Join() {
    return (
        <main>
            <JoinUs />
            <OurTeam />
        </main>
    );
}
