import RecycleOldClothesIntoFashionableItems from "@/blogdata/articles/recycle-old-clothes-into-fashionable-items.md"
import EnvironmentalImpactsOfFastFashion from "@/blogdata/articles/the-environmental-impacts-of-fast-fashion-on-landfills.md"
import DevelopmentOfClosedLoopRecyclingSystem from "@/blogdata/articles/development-of-closed-loop-recycling-system.md"
import TheImpactOfColonialismOnAfricanFashion from "@/blogdata/articles/the-impact-of-colonialism-on-african-fashion.md"
import TheRoleOfInternationalOrganizationsInShapingTextileProductionPoliciesAndGuidelines from "@/blogdata/articles/the-role-of-international-organizations-in-shaping-textile-production-policies-and-guidelines.md"
import SustainableFashionAsASolutionToTheFashionIndustrysImpactOnWastefulness from "@/blogdata/articles/sustainable-fashion-a-solution-to-fast-fashions-wastefulness.md"
import RoleOfChemicalRecyclingInPromotingSustainableFashion from "@/blogdata/articles/role-of-chemical-recycling-in-promoting-sustainable-waste-management.md"
import RoleOfAfricanTextilesInAfricanCultureAndIdentity from "@/blogdata/articles/role-of-african-textiles-in-african-culture-and-identity.md"
import RoleOfTechnologyInModernClothingProduction from "@/blogdata/articles/role-of-technology-in-modern-clothing-production.md"

const authors = [
    {
        name: "Saksham Garg",
        href: "https://www.linkedin.com/in/sak1sham/",
        pic: "",
        bio: "",
    },
    {
        name: "Nafeesa Javed",
        href: "http://www.linkedin.com/in/Nafeesaa-Javed",
        pic: "",
        bio: "",
    },
    {
        name: "Qurah tul ain",
        href: "https://www.linkedin.com/in/sak1sham/",
        pic: "",
        bio: "",
    },
    {
        name: "Samra Arshad",
        href: "https://www.linkedin.com/in/samra-arshad-",
        pic: "https://iili.io/HSmIvR4.jpg",
        bio: "",
    },
    {
        name: "Farwa Ramzan",
        href: "https://www.linkedin.com/in/farwa-ramzan-%F0%9F%8C%9F-website-content-writer-085257210/",
        pic: "https://iili.io/HU3DWp1.webp",
        bio: "",
    },
    {
        name: "Khadija Abdul Majid",
        href: "https://www.linkedin.com/in/khadija-butt-1931ba240/",
        pic: "https://iili.io/HrPFCj1.jpg",
        bio: "",
    },
    {
        name: "Mah Jabeen",
        href: "https://www.linkedin.com/in/mah-jabeen-b520b724a",
        pic: "",
        bio: "",
    },
]

const blogArticles = [
    {
        title: "Role of Technology in Modern Clothing Production",
        slug: "role-of-technology-in-modern-clothing-production",
        description: "",
        tags: ["fashion-industry"],
        seoKeywords: ["fashion-industry"],
        authorId: 2,
        imageThumbnail: "https://iili.io/HNy3Ehu.jpg",
        date: "March 30, 2023",
        content: RoleOfTechnologyInModernClothingProduction,
    },
    {
        title: "The Role of Textiles in African Culture and Identity",
        slug: "role-of-african-textiles-in-african-culture-and-identity",
        description: "",
        tags: ["african-fashion"],
        seoKeywords: ["african-fashion"],
        authorId: 1,
        imageThumbnail: "https://iili.io/HwA0mkQ.png",
        date: "March 23, 2023",
        content: RoleOfAfricanTextilesInAfricanCultureAndIdentity,
        isImageDark: true,
    },
    {
        title: "Role of Chemical Recycling in Promoting Sustainable Waste Management",
        slug: "role-of-chemical-recycling-in-promoting-sustainable-waste-management",
        description: "",
        tags: ["closed-loop recycling", "sustainable-future"],
        seoKeywords: ["closed-loop recycling", "sustainable-future"],
        authorId: 6,
        imageThumbnail: "https://iili.io/HhhS20Q.jpg",
        date: "March 22, 2023",
        content: RoleOfChemicalRecyclingInPromotingSustainableFashion,
    },
    {
        title: "Sustainable Fashion as a Solution to the Fashion Industry's Impact on Wastefulness",
        slug: "sustainable-fashion-a-solution-to-fast-fashions-wastefulness",
        description: "",
        tags: ["fashion-industry", "sustainable-fashion"],
        seoKeywords: ["fashion-industry", "sustainable-fashion"],
        authorId: 5,
        imageThumbnail: "https://i.imgur.com/lUAaWfB.jpeg",
        date: "March 21, 2023",
        content: SustainableFashionAsASolutionToTheFashionIndustrysImpactOnWastefulness,
    },
    {
        title: "The Role of International Organizations in Shaping Textile Production Policies and Guidelines",
        slug: "the-role-of-international-organizations-in-shaping-textile-production-policies-and-guidelines",
        description: "",
        tags: ["sustainable-future"],
        seoKeywords: ["sustainable-future"],
        authorId: 4,
        imageThumbnail: "https://iili.io/HMZpEV2.jpg",
        date: "March 6, 2023",
        content: TheRoleOfInternationalOrganizationsInShapingTextileProductionPoliciesAndGuidelines,
    },
    {
        title: "The Impact of Colonialism on African Fashion",
        slug: "the-impact-of-colonialism-on-african-fashion",
        description: "",
        tags: ["african-fashion", "sustainable-fashion"],
        seoKeywords: ["african-fashion", "sustainable-fashion"],
        authorId: 3,
        imageThumbnail: "https://iili.io/HM3rBHl.jpg",
        date: "March 3, 2023",
        content: TheImpactOfColonialismOnAfricanFashion,
        isImageDark: true,
    },
    {
        title: "Development of Closed-Loop Recycling System",
        slug: "development-of-closed-loop-recycling-system",
        description: "",
        tags: ["closed-loop recycling", "sustainable-fashion"],
        seoKeywords: ["closed-loop recycling", "sustainable-fashion"],
        authorId: 2,
        imageThumbnail: "https://www.polyestertime.com/wp-content/uploads/2017/04/Closed-loop-recycling-system-19-04-2017.jpg",
        date: "February 25, 2023",
        content: DevelopmentOfClosedLoopRecyclingSystem,
    },
    {
        title: "The Environmental Impact Of Fast Fashion On Landfills",
        slug: "the-environmental-impacts-of-fast-fashion-on-landfills",
        description: "",
        tags: ["fast-fashion", "landfills"],
        seoKeywords: ["fast-fashion", "landfills"],
        authorId: 1,
        imageThumbnail: "https://iili.io/HGslVKx.png",
        date: "February 23, 2023",
        content: EnvironmentalImpactsOfFastFashion,
        isImageDark: true,
    },
    {
        title: "Recycle Old Clothes into Fashionable Items",
        slug: "recycle-old-clothes-into-fashionable-items",
        description: "Do you want to recycle old clothes? Here we explain a commonly used process. Know how Larry Rowbs Foundation brings sustainability in Africa.",
        tags: ["sustainable-fashion"],
        seoKeywords: ["sustainable-fashion"],
        authorId: 0,
        imageThumbnail: "https://iili.io/H8mfxQ1.png",
        date: 'December 12, 2023',
        content: RecycleOldClothesIntoFashionableItems
    },
]

export default blogArticles;
export { authors }