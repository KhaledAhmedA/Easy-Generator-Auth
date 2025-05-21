import { auth, signOut } from "@/auth";
import { publicRoutes } from "@/routes";

const SettingsPage = async () => {
  const session = await auth();
  console.log("SESSION:", session);

  return (
    <div className="w-full" >
      {/* {JSON.stringify(session)} */}
      <br />
      <div className="mx-auto text-center">
        <h1 className="flex flex-row justify-center">
          <div>

            <img src="/imgs/logo.avif" className="mx-auto w-[10vh] h-[10vh]" alt="logo" />
          </div>
          <div className="mt-7 ml-3">

            Welcome to the application
          </div>
        </h1>
        <br />
        <p>This is the protected page, only signed user can access!</p>
        <br />
        <p>Signed Username: Minimum 3 Chars </p>
        <h4 className="text-red-600">{session?.user?.name}</h4>
        <br />
        <p>Signed Email: Email validation</p>
        <h4>{session?.user?.email}</h4>
        <br />
        <p>Password: At least (8 chars, 1 upper, 1 lower, 1 sign, 1 number)</p>
        <br />
        <p>User Database ID: </p>
        <h4>{session?.user?.id}</h4>
        <br />
      </div>
      <br />
      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: publicRoutes[0] });
        }}
      >
        <button className="ml-[33%] md:ml-[47%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Sign out</button>
      </form>
      <br />
      <p className="text-center text-red-400">Logout button will remove all session info from cookies storge</p>
    </div>
  );
};

export default SettingsPage;
