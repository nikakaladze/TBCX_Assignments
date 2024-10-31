import React from "react";
import Profile from "../Components/profile/Profile";
import ProfileImages, { images2 } from "../Components/profile/ProfileImages";
import Title from "../Components/profile/Title";

const ProfileCardContainer = () => {
  return (
    <section>
      <Title/>
      <div className="flex flex-wrap gap-5 w-full max-w-[1100px] my-5 mx-auto">
        <Profile
          name="David"
          lastname="Chesterfield"
          Email="ChesterfieldD@gmail.com"
          imgAdd={ProfileImages["8"].imageAdd}
          title="Product Owner"
          
        />

        <Profile
          name="Max"
          Email="Maxway19@yahoo.com"
          title="Cloud Engineer"
          lastname="Holloway"
          imgAdd={ProfileImages["0"].imageAdd}
          
        />
        <Profile
          name="Jon"
          lastname="Doe"
          Email="JonDoee89@gmail.com"
          imgAdd={ProfileImages["1"].imageAdd}
          title="Python Developer"
   
        />

        <Profile
          name="Wiliams"
          lastname="Rogers"
          Email="Wiliam1991@yahoo.com"
          imgAdd={images2["2"].imageAdd}
          title="UI/UX Designer"
   
        />

        <Profile
          title="Backend Developer"
          name="Henry"
          lastname="Stones"
          Email="Henryhen20@yahoo.com"
          imgAdd={images2["9"].imageAdd}
   
        />

        <Profile
          name="Helen"
          lastname="Mackenly"
          Email="HelenMackk@gmail.com"
          imgAdd={ProfileImages["4"].imageAdd}
          title="It Support"
   
        />

        <Profile
          name="Noah"
          lastname="Gudjonsen"
          Email="Gudjonsen.N@yahoo.com"
          imgAdd={ProfileImages["6"].imageAdd}
          title="System Administrator"
          
        />

        <Profile
          name="Andrew"
          lastname="MacAlister"
          Email="AndrewMac1@yahoo.com"
          imgAdd={ProfileImages["7"].imageAdd}
          title="Network Engineer"

        />

        <Profile
          name="Sarah"
          lastname="Kevins"
          Email="SarahKevin@gmail.com"
          imgAdd={ProfileImages["10"].imageAdd}
          title="Network Engineer"
          
        />
      </div>
    </section>
  );
};

export default ProfileCardContainer;
