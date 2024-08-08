interface Author {
    name: string;
    profileLink: string;
    profilePic: string;
    bio: string;
}

const authors: Record<string, Author> = {
    "saksham.garg": {
        name: "Saksham Garg",
        profileLink: "https://www.linkedin.com/in/sak1sham/",
        profilePic: "/team/Saksham Garg.jpeg",
        bio: "",
    },
    "nafeesa.javed": {
        name: "Nafeesa Javed",
        profileLink: "http://www.linkedin.com/in/Nafeesaa-Javed",
        profilePic: "",
        bio: "",
    },
    "qurah.tul.ain": {
        name: "Qurah tul ain",
        profileLink: "https://www.linkedin.com/in/sak1sham/",
        profilePic: "",
        bio: "",
    },
    "samra.arshad": {
        name: "Samra Arshad",
        profileLink: "https://www.linkedin.com/in/samra-arshad-",
        profilePic: "https://iili.io/HSmIvR4.jpg",
        bio: "",
    },
    "farwa.ramzan": {
        name: "Farwa Ramzan",
        profileLink:
            "https://www.linkedin.com/in/farwa-ramzan-%F0%9F%8C%9F-website-content-writer-085257210/",
        profilePic: "https://iili.io/HU3DWp1.webp",
        bio: "",
    },
    "khadija.abdul.majid": {
        name: "Khadija Abdul Majid",
        profileLink: "https://www.linkedin.com/in/khadija-butt-1931ba240/",
        profilePic: "https://iili.io/HrPFCj1.jpg",
        bio: "",
    },
    "mah.jabeen": {
        name: "Mah Jabeen",
        profileLink: "https://www.linkedin.com/in/mah-jabeen-b520b724a",
        profilePic: "",
        bio: "",
    },
    "rowaiye.olanrewaju": {
        name: "Rowaiye Olanrewaju",
        profileLink: "https://www.linkedin.com/in/rowaiyeolanrewaju",
        profilePic: "/team/Rowaiye Olanrewaju.jpeg",
        bio: "",
    },
};

export default authors;

export type { Author };
