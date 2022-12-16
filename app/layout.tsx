import Banner from '../components/Blog/Banner';
import Header from '../components/Blog/Header';
import '../styles/globals-blog.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='font-inter max-w-7xl mx-auto'>
        <Header />
        <Banner />

        <>{children}</>
      </body>
    </html>
  );
}