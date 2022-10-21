const userLatitude = document.querySelector(".latitude");
const userLongitude = document.querySelector(".longitude");
const btnLoc = document.querySelector(".btn-loc");
const btnLong = document.querySelector(".btn-copy-long");
const btnLat = document.querySelector(".btn-copy-lat");

function showPosition(position) {
  userLatitude.innerHTML = position.coords.latitude
  userLongitude.innerHTML = position.coords.longitude
}

const copyLat = (e) => {
  e.preventDefault();
  
  navigator.clipboard.writeText(userLatitude.innerHTML)
  .then(() => {
    btnLat.textContent = "Copied!!!";
    setTimeout(() => {
      btnLat.textContent = "Copy";
    }, 3000);
  })
};

const copyLong = (e) => {
  e.preventDefault();
  
  navigator.clipboard.writeText(userLongitude.innerHTML)
  .then(() => {
    btnLong.textContent = "Copied!!!";
    setTimeout(() => {
      btnLong.textContent = "Copy";
    }, 3000);
  })
};

btnLoc.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(showPosition);
});
btnLat.addEventListener("click", copyLat);
btnLong.addEventListener("click", copyLong);