import Profile from "../Components/profile/Profile";
import Title from "../Components/profile/Title";
import ProfileImages from '../../app/Components/profile/ProfileImages';

const ProfileCardContainer = async(props) => {


    return(
      <>

      <Title />
      <section className="flex flex-wrap gap-4 mx-auto max-w-5xl">
        <Profile
          name="Steve"
          Email="Steve1999@yahoo.com"
          title="Director" 
          lastname="White"
          imgAdd={ProfileImages["8"].imageAdd}
        />

        <Profile 
          name='Max'
          Email='MAx1009@gmail.com'
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
          imgAdd={ProfileImages["2"].imageAdd}
          title="UI/UX Designer"
        />


        <Profile
          title="Backend Developer"
          name="Henry"
          lastname="Stones"
          Email="Henryhen20@yahoo.com"
          imgAdd={ProfileImages["9"].imageAdd}
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
      </section>
      </>

      
      
  )

};

export default ProfileCardContainer;
