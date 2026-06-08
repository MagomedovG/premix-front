import MainHeader from "@/components/MainHeader/MainHeader";
import MainFooter from "@/components/MainFooter/MainFooter";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
