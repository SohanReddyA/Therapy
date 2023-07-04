import Link from 'next/link';

export default function Header() {
  return (
    <nav className="container mx-auto top-0 left-0 right-0 bg-white h-[80px] fixed z-50 w-full ">
      <div className="flex items-center w-full h-full">
        <div className="flex flex-row justify-between w-full">
          <div className="mx-20 mt-10">
            <Link href={'/'} className=" text-4xl font-bold">
              Friennly
            </Link>
          </div>
          <div className="flex flex-row gap-8 mt-10">
            <Link className=" text-xl" href={'/therapists'}>
              Therapists
            </Link>
            {/* <Link className=" text-xl" href={'/quiz'}>Test</Link> */}
            <Link className=" text-xl" href={'/register'}>
              SignUP
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
