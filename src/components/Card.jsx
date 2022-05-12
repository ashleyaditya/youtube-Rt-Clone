const Card = ({ title, name, img }) => {
  console.log(title, img);
  return (
    <>
      <div class="card">
        <div>
          <img src={img} alt="" width="320px" height="176px" />
        </div>
        <div class="flex-container">
          <div class="mr-10">
            <img class="yt-logo" src={img} alt="" width="42px" height="42px" />
          </div>
          <div>
            <div>
              <h4>{title}</h4>
            </div>
            <div class="flex-container">
              <p>{name}</p>
              <div class="ml-10">
                <i class="fa-solid fa-circle-check"></i>
              </div>
            </div>
            <p>33k views. 4 years Ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
