export const links = {
    primaryLinks: [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'About us',
            sublinks: [
                { name: 'Why?', href: '/#why-are-we-doing-this' },
                { name: 'Our Team', href: '/join#our-team' },
                { name: 'Our Partners', href: '/#partners' },
            ],
        },
        {
            name: 'Get Involved',
            sublinks: [{ name: 'Join us', href: '/join-us' }],
        },
        { name: 'Contact', href: '/contact' },
    ],

    donateLink: {
        name: 'Donate',
        href: '/donate',
    },

    secondaryLinks: [
        { name: 'Partners', href: '/partners' },
        { name: 'Volunteer', href: '/fill-me/volunteer_application' },
        { name: 'Careers', href: '/fill-me/career_application' },
        { name: 'Corporate Partnerships', href: '/corporate-partnerships' },
    ],

    tertiaryLinks: [{ name: 'Terms & Conditions', href: '/terms' }],
    socialLinks: [
        {
            name: 'Facebook',
            href: 'https://facebook.com/larryrowbsfoundation',
            icon: 'facebook',
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/thelarryrowbsfoundation',
            icon: 'instagram',
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/company/larryrowbsfoundation',
            icon: 'linkedin',
        },
    ],
} as const
