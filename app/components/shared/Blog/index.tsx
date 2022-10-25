import Header from "~/components/shared/BlogHeader";
import Footer from "~/components/shared/BlogFooter";

export default function Blog({children}: any) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
