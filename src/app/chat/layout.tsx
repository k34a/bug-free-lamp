import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const RootLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const session = await getServerSession();

    if (!session?.user) {
        redirect("/login");
    }

    return <>{children}</>;
};

export default RootLayout;
