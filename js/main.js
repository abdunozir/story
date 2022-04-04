let story_container = document.querySelector('.container-story');
let wrapper = document.querySelector('.wrapper');

let stories = `
`;

story.forEach((item) => {
  stories += `
            <div class="story ell${item.id}">
            <div class="moreimg stimg${item.id}"" onclick="clickstory(${item.id})">
              <div class="userstoryimg st${item.id}">
                <img src="${item.userImg}" alt="videos" />
              </div>
              <h4>${item.userName}</h4>
              <p>21h</p>
            </div>
            <div class="container_video" onclick="clickstory(${item.id})">
              <video src="${item.vid[0]}" class="elvid${item.id}"></video>
            </div>

            <div class="under_video under${item.id}">
            <div class="story-top">
              <div class="videotime-top-story">
              <div class="video_count">
              </div>
              </div>
              <div class="story-top-userimg">
                <div class="userImgtop">
                <img src="${item.userImg}" alt="" />
                </div>
                <div class="story-control">
                  <span><i class="bx bx-play"></i></span>
                  <span><i class="bx bxs-volume-mute"></i></span>
                  <span><i class="bx bx-dots-horizontal-rounded"></i></span>
                </div>
              </div>
            </div>
            <div class="story-bottom">
              <form action="">
                <input type="text" placeholder="type something.." />
                </form>
                <span><i class="bx bxl-telegram"></i></span>
            </div>
            </div>
          </div>
            `;
});

wrapper.innerHTML = stories;
let i = 0;
let playedid = '';
let currentId = 0;
const clrinter = setInterval(interval, 100);

function interval() {
  if (currentId !== 0) {
    if (currentId !== 10) {
      clickstory(currentId);
      currentId++;
    }
  }
}

function clickstory(id) {
  currentId = id;
  clearInterval(clrinter);
  if (i == 1) {
    let clickedstory = document.querySelector('.clickedstory');
    clickedstory.classList.remove('clickedstory');
    let usermainimage = document.querySelector('.usermainimage');
    usermainimage.classList.remove('usermainimage');
    let underclass = document.querySelector('.under');
    underclass.classList.remove('under');
    let elvid = document.querySelector('.elvid' + playedid);
    elvid.pause();
    i--;
  }
  let under = document.querySelector('.under' + id);
  under.classList.add('under');
  let elvid = document.querySelector('.elvid' + id);
  elvid.play();
  playedid = id;
  let moreimg = document.querySelector('.stimg' + id);
  moreimg.classList.add('usermainimage');
  let clickedel = document.querySelector('.ell' + id);
  clickedel.classList.add('clickedstory');
  i++;

  //   move
  if (id == 1) {
    wrapper.style.marginLeft = '470px';
  } else if (id == 2) {
    wrapper.style.marginLeft = '235px';
  } else if (id == 3) {
    wrapper.style.marginLeft = '0px';
  } else if (id == 4) {
    wrapper.style.marginLeft = '-235px';
  } else if (id == 5) {
    wrapper.style.marginLeft = '-470px';
  } else if (id == 6) {
    wrapper.style.marginLeft = '-705px';
  } else if (id == 7) {
    wrapper.style.marginLeft = '-940px';
  } else if (id == 8) {
    wrapper.style.marginLeft = '-1175px';
  } else if (id == 9) {
    wrapper.style.marginLeft = '-1410px';
  } else if (id == 10) {
    wrapper.style.marginLeft = '-1645px';
  }
}

// let pageCount = 10;
// let hozirgisi = 8;

// currentPage = hozirgisi;

// let start_page = currentPage - 2 <= 0 ? 1 : currentPage - 2;

// if (currentPage + 2 > pageCount) {
//   start_page -= currentPage + 2 - pageCount;
// }

// for (let index = start_page; index <= pageCount; index++) {
//   if (index == start_page + 5) {
//     break;
//   }
//   console.log(index);
// }
