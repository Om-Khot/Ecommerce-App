function Header(){
    return(
        <div className="w-full z-10 flex justify-end fixed">
            <h1 className="text-3xl bg-indigo-800 font-bold text-sky-100 z-10 fixed top-0 left-0 right-0 mb-2 px-10 py-3">#MyStore</h1>
            <div className="w-1/5  flex justify-around items-center text-sky-100 z-10 mr-5 list-none py-5">
                <li>Home</li>
                <li>Login</li>
                <li>Orders</li>
                <li>Help</li>
            </div>
        </div>
    );
}

export default Header;