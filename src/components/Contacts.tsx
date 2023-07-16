function Contacts() {
  return (
    <>
      <div className="mt-20 mb-20">
        <h2 className="title-p text-center mt-20 text-4xl title  justify-center flex">
          Contacts
        </h2>
        <div className="flex cont-container mt-20">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-gmail-8913532-7250524.png"
                  alt="gmail"
                  width={400}
                  height={400}
                />
              </div>
              <div className="flip-card-back">
                <h2 className="title flex itmes-center justify-center">
                  Gmail
                </h2>
                <p className="subtitle p-4">
                  Get in touch ::
                  <br />
                  Email: brianmiruri983@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* card 2 */}

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/3d-applications/512/app_icons_communication___phone_call_apple_icon_conversation_contacts.png"
                  alt="phone"
                  width={400}
                  height={400}
                />
              </div>
              <div className="flip-card-back">
                <h2 className="title flex itmes-center justify-center">
                  Phone
                </h2>
                <p className="subtitle p-4">
                  Call
                  <br />
                  No. +254743807662
                </p>
              </div>
            </div>
          </div>
          {/* card 3 */}

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-2950150-2447911.png"
                  alt="Github"
                  width={400}
                  height={400}
                />
              </div>
              <div className="flip-card-back">
                <h2 className="title flex itmes-center justify-center">
                  Github
                </h2>
                <p className="subtitle p-4">
                  Follow Link ::
                  <br />
                  Link:{" "}
                  <a href="https://github.com/Manguriu">
                    {" "}
                    <u>Github Account</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/428/307/original/3d-social-media-icons-linkedin-free-png.png"
                  alt="linkedin"
                  width={400}
                  height={400}
                />
              </div>
              <div className="flip-card-back">
                <h2 className="title flex itmes-center justify-center">
                  LinkedIn
                </h2>
                <p className="subtitle p-4">
                  LinkedIn Profile ::
                  <br />
                  Link:{" "}
                  <a href="https://www.linkedin.com/in/brian-manguriu-3b0b07207/">
                    <u>"My Profile"</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
