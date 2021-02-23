import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl text-paceA font-display md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="mr-4 hover:underline">Home</a>
      </Link>
      <Link href="/posts">
        <a className="hover:underline">Blog</a>
      </Link>
      .
    </h2>
  )
}
