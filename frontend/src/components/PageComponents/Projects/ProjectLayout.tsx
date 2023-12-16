// components/Layout.tsx

import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
    children?: React.ReactNode;
  }
const Layout: React.FC<LayoutProps> = ({ children } :any) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Your Portfolio</title>
        {/* Add your meta tags, stylesheets, and other head elements here */}
      </Head>

      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <Link href="/">
            <a className="text-white text-lg font-bold">Home</a>
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
};

export default Layout;
