import Link from "next/link";

const Header = () => {
    return (
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex gap-4">
          <Link href="/home">
            <span className="hover:underline cursor:pointer">Home</span>
          </Link>
          <Link href="/about">
            <span className="hover:underline cursor:pointer">About</span>
          </Link>
        </nav>
      </header>
    );
}

export default Header;