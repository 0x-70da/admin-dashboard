import Image from "next/image"

const Header = () => {
  return (
    <header className="w-full h-20 bg-(--background-secondary) flex justify-between items-center px-4 py-2 mb-4 rounded-md">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
            <Image src="/icons/bell.png" alt="bell" width={40} height={40}/>
            <Image src="/icons/user.png" alt="user" width={40} height={40}/>
            <span className="hidden sm:block font-bold">Mahmoud</span>
        </div>
    </header>
  )
}

export default Header