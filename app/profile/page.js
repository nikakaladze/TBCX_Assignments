import { getSession } from "@auth0/nextjs-auth0";
import { UseServerSide } from "./components/UseServerSide";
import { redirect } from "next/navigation";


const ProfileCardContainer = async() => {
const session = await getSession();
const user =  session?.user;
if(!user){
  redirect("/")
}

    return(
      <UseServerSide />
  )

};

export default ProfileCardContainer;
