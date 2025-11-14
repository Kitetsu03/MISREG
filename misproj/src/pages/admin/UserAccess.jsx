import AdminNav from "../../components/AdminNav";

function UserAccess() {
  return (
    <>
      <div className="flex">
        <AdminNav />
        <header>
            <h1>USER & ACCESS MANAGEMENT</h1> 
            <p>Manage user accoutes, roles, and permissions for your  church management system.</p>
            <button class="bg-black hover:bg-blue-500 text-white font-bold py-0.3 px-2 rounded-full"><p class="mr-px">+Add User</p></button>
            <div className="grid grid-cols-2 grid-rows-6 gap-4">
                <div className="col-span-2">1</div>
                <div className="col-span-2 row-span-2 row-start-2">2</div>
                <div className="col-span-2 row-span-3 row-start-4">3</div>
            </div>
         </header>
        <div className="">
         <head>
            <h1>SEARCH & FILTER</h1>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search" />
            <form>
              <div>
                <span class="material-symbols-outlined">search</span>
              </div>
            </form>
         </head>
        </div>
      </div>
    </>
  );
}

export default UserAccess;