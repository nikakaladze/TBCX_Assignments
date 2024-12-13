import React from "react";

interface ProfileProps {
  title: string;
  imgAdd: string;
  name: string;
  lastname: string;
  Email: string;
}

export const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <>
      <div className="w-[300px] border border-gray-500 p-5 rounded-md">
        <h4 className="text-center mb-4">{props.title}</h4>

        <img src={props.imgAdd} alt="Profile Image" className="w-[200px] h-[100px]" />
        <p>
          <strong>FirstName:</strong> {props.name}
        </p>
        <p>
          <strong>Lastname:</strong> {props.lastname}
        </p>
        <p>
          <strong>Email:</strong> {props.Email}
        </p>

        <button className="text-white rounded-lg border-none bg-[#1171DF] px-8 py-3 w-full my-2 text-lg cursor-pointer">
          Read More
        </button>
      </div>
    </>
  );
};

export default Profile;
