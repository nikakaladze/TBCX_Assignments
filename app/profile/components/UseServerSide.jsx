import { getSession } from "@auth0/nextjs-auth0";
export const UseServerSide = async () => {
        const session = await getSession();
        const user = session?.user;

        if(!user){
            return null;

        }
    return user ? (

        <div><p>
            <span>name:nika</span>
            <span>Lastname:kaladze</span>
            <span>Email:nika89@gmail.com</span>
        </p></div>
    ) : (
        <p>User Is Not Logged in</p>
    )


}
