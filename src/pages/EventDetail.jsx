import cake from "../assets/cake.png"
const EventDetail = () => {
  return (
    <div className="container flex flex-col-reverse md:mt-16 justify-between h-full xl:grid xl:grid-cols-2">
      <div class="flex flex-col md:items-start md:mx-52 mx-5">
        <div class="flex flex-col justify-start">
          <h2 class="text-primary1 text-3xl font-bold my-3 sm:birthday">
            <span class="text-primary1">Birthday Bash</span>
          </h2>
          <h4 class="block text-neutral2 text-base-600 mb-8 hostedby">
            <span>Hosted by </span>
            <span class="text-neutral1 elysia">Elysia</span>
          </h4>

          <div>
            <div class="flex items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5554 13.2057H3.79004C3.23804 13.2057 2.79004 12.7577 2.79004 12.2057C2.79004 11.6537 3.23804 11.2057 3.79004 11.2057H27.5554C28.1074 11.2057 28.5554 11.6537 28.5554 12.2057C28.5554 12.7577 28.1074 13.2057 27.5554 13.2057Z" fill="#8456EC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6016 18.4128C21.0496 18.4128 20.5963 17.9648 20.5963 17.4128C20.5963 16.8608 21.0376 16.4128 21.5896 16.4128H21.6016C22.1536 16.4128 22.6016 16.8608 22.6016 17.4128C22.6016 17.9648 22.1536 18.4128 21.6016 18.4128Z" fill="#8456EC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.685 18.4128C15.133 18.4128 14.6796 17.9648 14.6796 17.4128C14.6796 16.8608 15.121 16.4128 15.673 16.4128H15.685C16.237 16.4128 16.685 16.8608 16.685 17.4128C16.685 17.9648 16.237 18.4128 15.685 18.4128Z" fill="#8456EC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75587 18.4128C9.20387 18.4128 8.74921 17.9648 8.74921 17.4128C8.74921 16.8608 9.19187 16.4128 9.74387 16.4128H9.75587C10.3079 16.4128 10.7559 16.8608 10.7559 17.4128C10.7559 17.9648 10.3079 18.4128 9.75587 18.4128Z" fill="#8456EC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6016 23.5951C21.0496 23.5951 20.5963 23.1471 20.5963 22.5951C20.5963 22.0431 21.0376 21.5951 21.5896 21.5951H21.6016C22.1536 21.5951 22.6016 22.0431 22.6016 22.5951C22.6016 23.1471 22.1536 23.5951 21.6016 23.5951Z" fill="#8456EC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.685 23.5951C15.133 23.5951 14.6796 23.1471 14.6796 22.5951C14.6796 22.0431 15.121 21.5951 15.673 21.5951H15.685C16.237 21.5951 16.685 22.0431 16.685 22.5951C16.685 23.1471 16.237 23.5951 15.685 23.5951Z" fill="#8456EC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75587 23.5951C9.20387 23.5951 8.74921 23.1471 8.74921 22.5951C8.74921 22.0431 9.19187 21.5951 9.74387 21.5951H9.75587C10.3079 21.5951 10.7559 22.0431 10.7559 22.5951C10.7559 23.1471 10.3079 23.5951 9.75587 23.5951Z" fill="#8456EC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.058 7.72133C20.506 7.72133 20.058 7.27333 20.058 6.72133V2.33333C20.058 1.78133 20.506 1.33333 21.058 1.33333C21.61 1.33333 22.058 1.78133 22.058 2.33333V6.72133C22.058 7.27333 21.61 7.72133 21.058 7.72133Z" fill="#8456EC"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2871 7.72133C9.73511 7.72133 9.28711 7.27333 9.28711 6.72133V2.33333C9.28711 1.78133 9.73511 1.33333 10.2871 1.33333C10.8391 1.33333 11.2871 1.78133 11.2871 2.33333V6.72133C11.2871 7.27333 10.8391 7.72133 10.2871 7.72133Z" fill="#8456EC"/>
                <mask id="mask0_18_953" maskUnits="userSpaceOnUse" x="2" y="3" width="27" height="27">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66669 3.4388H28.6667V30H2.66669V3.4388Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_18_953)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.028 5.4388C6.57069 5.4388 4.66669 7.2828 4.66669 10.6308V22.6961C4.66669 26.1175 6.57069 28.0001 10.028 28.0001H21.3054C24.7627 28.0001 26.6667 26.1521 26.6667 22.7975V10.6308C26.672 8.98413 26.2294 7.70413 25.3507 6.82413C24.4467 5.91746 23.0534 5.4388 21.3174 5.4388H10.028ZM21.3054 30.0001H10.028C5.48802 30.0001 2.66669 27.2015 2.66669 22.6961V10.6308C2.66669 6.19346 5.48802 3.4388 10.028 3.4388H21.3174C23.596 3.4388 25.48 4.12146 26.7667 5.4108C28.016 6.66546 28.6734 8.46946 28.6667 10.6335V22.7975C28.6667 27.2401 25.8454 30.0001 21.3054 30.0001V30.0001Z" fill="#8456EC"/>
                </g>
            </svg>


              <h4 class="mx-5 mb-5">
                <span class="text-lg mt-5 font-bold text-primary1">
                  18 August 6:00PM
                </span>
                <span class="block text-sm">
                  to 19 August 1:00PM <span class="inline"> UTC +10</span>
                </span>
              </h4>
            </div>
            <div class="flex items-center">

            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.334 11.3333C15.0473 11.3333 14.0007 12.38 14.0007 13.668C14.0007 14.9546 15.0473 16 16.334 16C17.6207 16 18.6673 14.9546 18.6673 13.668C18.6673 12.38 17.6207 11.3333 16.334 11.3333ZM16.334 18C13.9447 18 12.0007 16.0573 12.0007 13.668C12.0007 11.2773 13.9447 9.33331 16.334 9.33331C18.7233 9.33331 20.6673 11.2773 20.6673 13.668C20.6673 16.0573 18.7233 18 16.334 18Z" fill="#8456EC"/>
                    <mask id="mask0_18_962" maskUnits="userSpaceOnUse" x="5" y="2" width="23" height="27">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33331 2.66666H27.3326V28.6667H5.33331V2.66666Z" fill="white"/>
                    </mask>
                <g mask="url(#mask0_18_962)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3326 4.66666C11.37 4.66666 7.33264 8.74266 7.33264 13.7507C7.33264 20.1227 14.8313 26.3307 16.3326 26.6613C17.834 26.3293 25.3326 20.1213 25.3326 13.7507C25.3326 8.74266 21.2953 4.66666 16.3326 4.66666ZM16.3326 28.6667C13.9406 28.6667 5.33264 21.264 5.33264 13.7507C5.33264 7.63866 10.2673 2.66666 16.3326 2.66666C22.398 2.66666 27.3326 7.63866 27.3326 13.7507C27.3326 21.264 18.7246 28.6667 16.3326 28.6667Z" fill="#8456EC"/>
                </g>
            </svg>

              <h4 class="mx-5 mb-5">
                <span class="text-lg mt-5 font-bold text-primary1">
                  Street Name
                </span>
                <span class="block text-sm"> Suburb, State, Postcode</span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={cake} alt="birthday cake" class="w-full md:w-3/5 " />
      </div>
    </div>
  );
};

export default EventDetail;
