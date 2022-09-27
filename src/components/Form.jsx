import cake from "../assets/cake.png";

const Form = ({handleChange, handleSubmit}) => {
    return (
        <div class="container flex px-5 justify-center xl:justify-start xl:mx-24">
      <form onSubmit={handleSubmit} class="flex flex-col justify-center bg-white p-5 xl:px-12 drop-shadow-2xl">
       
       <h4 class="text-lg">
      <span>🎉</span>
      <span class="font-bold text-primary1" >{" "}Event Details </span>

       </h4>
        <label name="title">Event Name</label>
        <input onChange={handleChange} type="text" placeholder="Event name" class="px-6 bg-neutral4 rounded-lg mb-5" />

        <label name="host">Host Name</label>
        <input onChange={handleChange} type="text" placeholder="Host name" class="px-6 bg-neutral4 rounded-lg mb-5" />
        
            <label name="img" class="block">Event Photo</label>
        <div class="flex">
            <button type="reset">
            <ion-icon name="add-outline" size="large" class="text rounded-lg bg-white p-5 drop-shadow-xl"></ion-icon>
            </button>
            <img src={cake} alt="event" class="mx-5 bg-white w-16 h-16 drop-shadow-3xl rounded-lg"/>
        </div>
        
        <h4 class="text-lg">
        <span>📅</span>
        <span class="mt-5 font-bold text-primary1">{" "}Event Date & Time</span> 
        </h4>
        <div class="flex">
            <div class="flex flex-col">
                <label name="dateStart">Start </label>
                <input onChange={handleChange} type="date" class="px-6 bg-neutral4 rounded-lg mb-5"/>
            </div>
            <div class="flex flex-col">
                <label name="hourStart">Time</label>
                <input onChange={handleChange} type="time" class="px-6 ml-3 bg-neutral4 rounded-lg mb-5"/>
            </div>
        </div>
        <div class="flex">
            <div class="flex flex-col">
                <label name="dateEnd">End  </label>
                <input onChange={handleChange} type="date" class="px-6 bg-neutral4 rounded-lg mb-5"/>
            </div>
            <div class="flex flex-col">
                <label name="hourEnd">Time</label>
                <input onChange={handleChange} type="time" class="px-6 ml-3 bg-neutral4 rounded-lg mb-5"/>
            </div>
        </div>

        <h4 class="text-lg">
            <span>📍</span>
            <span class="mt-5 font-bold text-primary1">{" "}Event Location </span>
        </h4>
        <label name="street">Street</label>
        <input onChange={handleChange} type="text" class="px-6 bg-neutral4 rounded-lg mb-5"/>
       
        <label name="ubication">Suburb, State, Postcode </label>
        <input onChange={handleChange} type="text" class="px-6 bg-neutral4 rounded-lg mb-5"/>

        <div class="grid place-items-center mt-8">
          <button type="submit"
            class="relative px-12 py-2 md:px-28 md:py-4 rounded-lg md:text-lg drop-shadow-2xl bg-gradient-to-r from-primary3 to-primary4"
            href="/event"
          >
            <span class="font-bold text-white ">Next</span>
          </button>
        </div>
      </form>
      </div>
    )
};

export default Form;