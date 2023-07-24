import Link from 'next/link'
export default function Header() {
    return (
<nav className="flex grow">
{/* Desktop sign in links */}
<ul className="flex grow justify-end flex-wrap items-center">
  <li>
    <Link className="text-sm font-medium text-indigo-500 hover:underline px-3 lg:px-5 py-2 flex items-center" href="/signin">
      Sign in
    </Link>
  </li>
  <li className="ml-3">
    <Link className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm" href="/post-a-job">
      Post a job - $299
    </Link>
  </li>
</ul>
</nav>
  )
}
