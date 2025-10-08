import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Larry Rowbs Foundation x SOULU | e.don Movement',
    description:
        'Join the e.don Movement by Larry Rowbs Foundation and SOULU. Transform fashion waste into hope, dignity, and sustainable community impact.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
