function Header() {
  return (
    <>
      <div className="container" id='home'>
        <div className="row">
          <div className="col-1">
            <img src="./images/man.png" alt="" />
          </div>
          <div className="col-1">
            <div className="heading">
              <h4>Mohd Farman Parvez</h4>
              <h1 style={{color: '#fff'}}>
                I`m a Creative <br /> <span> Web Developer</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                voluptatem nostrum quaerat repellendus facere tenetur? Ipsam
                facilis dolorum repudiandae cumque illum tenetur nemo dolores.
                Ea nostrum aliquid aut porro saepe!
              </p>
              <a href="/" className="btn">
                Download Cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
