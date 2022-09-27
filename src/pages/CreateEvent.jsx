import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const CreateEvent = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        image: "",
        title: "",
        dateIn: "",
        dateOut: "",
        street: "",
        ubication: "",

    });

    const handleChange = (e) => {
        e.preventDefault()
        setState({ ...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

          navigate("/event")
    }
  return (
    <div class="container mt-5 flex flex-col xl:flex-row xl:justify-center xl:my-12 xl:mr-24">
      
      <div class="container flex justify-center xl:justify-end xl:mt-24 ">
      <h1 class="flex flex-col items-center mb-5 text-5xl font-bold lg:mb-8 lg:text-6xl xl:text-7xl text-primary1">
        <span class="block ">Create your{" "}
        </span>
        <span class="text-transparent  h-[100%] bg-clip-text bg-gradient-to-r from-primary3 to-primary4">
          Event
        </span>
      </h1>
      </div>

      <Form handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default CreateEvent;
