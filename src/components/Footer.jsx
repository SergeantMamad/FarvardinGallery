const Footer = () => {
  return (
    <div>
      {" "}
      <div
        className="bg-zinc-800 text-white h-max flex justify-center py-2 mt-20 items-center gap-20"
        dir="rtl"
      >
        <p className="text-xl font-bold">شرکت های همکار</p>
        <div className="max-w-5xl flex gap-24">
          <div className="h-[70px] w-[120px]">
            <img
              src="images/the-web-works.png"
              className="h-full w-full object-contain grayscale"
            />
          </div>
          <div className="h-[70px] w-[120px]">
            <img
              src="images/space-cube.png"
              className="h-full w-full object-contai grayscale"
            />
          </div>
          <div className="h-[70px] w-[120px]">
            <img
              src="images/fast-banana.png"
              className="h-full w-full object-contain grayscale"
            />
          </div>
          <div className="h-[70px] w-[120px]">
            <img
              src="images/cheshire-county-hygiene-services.png"
              className="h-full w-full object-contain grayscale"
            />
          </div>
          <div className="h-[70px] w-[120px]">
            <img
              src="images/auto-speed.png"
              className="h-full w-full object-contain grayscale"
            />
          </div>
          <div className="h-[70px] w-[120px]">
            <img
              src="images/crofts-accountants.png"
              className="h-full w-full object-contain grayscale"
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-white h-max py-10" dir="rtl">
        <div className="flex justify-between max-w-6xl mx-auto">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl">تیم گالری فروردین</p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              درباره ما
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              اعضای تیم
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              موقعیت های شغلی
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl">پشتیبانی</p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              پشتیبانی فروش
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              پشتیبانی فنی
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              حمل و نقل کالا
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              شرایط برگشت وجه
            </p>
            <a
              href="tel:+02112531925"
              className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max"
            >
              02112531925
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl">سرویس ها</p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              باشگاه مشتریان
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              باشگاه هنرمندان
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              خرید و فروش حضوری
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              مبادله آثار هنری
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              شعبه مرکزی اصفهان
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              شعبه فرعی تهران
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl">ما را دنبال کنید</p>
            <div className="flex gap-4">
              <div className="p-2 bg-zinc-800 rounded-full border border-black transition-colors duration-500 hover:border-green-500 h-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 32 32"
                  fill="#ffffff"
                >
                  <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
                </svg>
              </div>
              <div className="p-2 bg-zinc-800 rounded-full border border-black transition-colors duration-500 hover:border-green-500 h-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 32 32"
                  fill="#ffffff"
                >
                  <path
                    d="M16,2c-7.732,0-14,6.268-14,14s6.268,14,14,14,14-6.268,14-14S23.732,2,16,2Zm6.489,9.521c-.211,2.214-1.122,7.586-1.586,10.065-.196,1.049-.583,1.401-.957,1.435-.813,.075-1.43-.537-2.218-1.053-1.232-.808-1.928-1.311-3.124-2.099-1.382-.911-.486-1.412,.302-2.23,.206-.214,3.788-3.472,3.858-3.768,.009-.037,.017-.175-.065-.248-.082-.073-.203-.048-.29-.028-.124,.028-2.092,1.329-5.905,3.903-.559,.384-1.065,.571-1.518,.561-.5-.011-1.461-.283-2.176-.515-.877-.285-1.574-.436-1.513-.92,.032-.252,.379-.51,1.042-.773,4.081-1.778,6.803-2.95,8.164-3.517,3.888-1.617,4.696-1.898,5.222-1.907,.116-.002,.375,.027,.543,.163,.142,.115,.181,.27,.199,.379,.019,.109,.042,.357,.023,.551Z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="p-2 bg-zinc-800 rounded-full border border-black transition-colors duration-500 hover:border-green-500 h-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 32 32"
                  fill="#ffffff"
                >
                  <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
                </svg>
              </div>
              <div className="p-2 bg-zinc-800 rounded-full border border-black transition-colors duration-500 hover:border-green-500 h-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 32 32"
                  fill="#ffffff"
                >
                  <path d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10" />
      </div>
      <div className="bg-black flex items-center -mt-5">
        <p className="text-white mx-auto mb-5">
          طراحی و کد نویسی شده با ♡ توسط محمد حسین محرابی - 1403
        </p>
      </div>
    </div>
  )
}
export default Footer
