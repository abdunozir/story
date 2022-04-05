let story_container = document.querySelector('.container-story');
let wrapper = document.querySelector('.wrapper');

let stories = `
`;
let S_img = ' ';
let S_vid = '';
let mediaCount = 0;
let mediaCountarr = [];
story.forEach((item) => {
  if (item.vid.length > 1) {
    let im = 1;
    item.vid.forEach((el) => {
      mediaCount++;
      if (el.indexOf('.mp4') !== -1) {
        im++;
        S_vid += `<div class="vid-story-div"><video  src="${el}" class="elvid${item.id}${im}"></video> </div>`;
      } else {
        S_img += `<div class="img-story-div"><img src="${el}" alt=""></div>`;
      }
    });
    mediaCountarr.push(mediaCount);
    mediaCount = 0;
  } else {
    item.vid.forEach((el) => {
      mediaCount++;
      if (el.indexOf('.mp4') !== -1) {
        S_vid += `<div class="vid-story-div"><video autoplay  src="${el}" class="elvid${item.id}"></video> </div>`;
      } else {
        S_img += `<div class="img-story-div"><img src="${el}" alt=""></div>`;
      }
    });
    mediaCountarr.push(mediaCount);
    mediaCount = 0;
  }
  stories += `
            <div class="story ell${item.id}">
              
               
                            <div class="moreimg stimg${item.id}" onclick="clickstory(${item.id})">
                <div class="userstoryimg st${item.id}">
                  <img src="${item.userImg}" alt="videos" />
                </div>
                <span>${item.userName}</span>
                <h4>${item.userName}</h4>
                <p>21h</p>
                            </div>
           
            <div class="container_video" onclick="clickstory(${item.id})">
              <div class="storySliderContainer  SS_${item.id}">
              ${S_img} ${S_vid}</div>
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
            <span class="story-media-move-left moveleft${item.id}  story_move_btns_none" onclick="moveLeft(${item.id})"><i class='bx bxs-chevron-left'></i></span>
            <span class="story-media-move-right moveright${item.id} story_move_btns_none" onclick="moveRight(${item.id})"><i class='bx bxs-chevron-right' ></i></span>
          </div>
            `;
  S_img = '';
  S_vid = '';
});

wrapper.innerHTML = stories;
let i = 0;
let playedid = '';
let currentId = 0;

function clickstory(id) {
  currentId = id;
  if (i == 1) {
    let clickedstory = document.querySelector('.clickedstory');
    clickedstory.classList.remove('clickedstory');
    let usermainimage = document.querySelector('.usermainimage');
    usermainimage.classList.remove('usermainimage');
    let underclass = document.querySelector('.under');
    underclass.classList.remove('under');
    let elvid = document.querySelector('.elvid' + playedid);
    if (elvid !== null) {
      elvid.paused();
    }

    if (mediaCountarr[currentId - 1] > 1) {
      let storymediamoveright = document.querySelector('.story_move_btns');
      if (storymediamoveright !== null) {
        storymediamoveright.classList.remove('story_move_btns');
        storymediamoveright.classList.add('story_move_btns_none');
      }
      let storymediamoveleft = document.querySelector('.story_move_btns');
      if (storymediamoveleft !== null) {
        storymediamoveleft.classList.remove('story_move_btns');
        storymediamoveleft.classList.add('story_move_btns_none');
      }
      // console.log(mediaCountarr[id - 1]);
    } else {
      let storymediamoveleft = document.querySelector('.story_move_btns');
      let storymediamoveright = document.querySelector('.story_move_btns');
      if (storymediamoveleft !== null) {
        storymediamoveleft.classList.remove('story_move_btns');
        storymediamoveright.classList.remove('story_move_btns');
      }
      storymediamoveleft.classList.add('story_move_btns_none');
      storymediamoveright.classList.add('story_move_btns_none');
    }
    i--;
  }
  if (mediaCountarr[id - 1] > 1) {
    let storymediamoveleft = document.querySelector('.moveleft' + id);
    storymediamoveleft.classList.add('story_move_btns');
    storymediamoveleft.classList.remove('story_move_btns_none');
    let storymediamoveright = document.querySelector('.moveright' + id);
    storymediamoveright.classList.add('story_move_btns');
    storymediamoveright.classList.remove('story_move_btns_none');
  }
  let under = document.querySelector('.under' + id);
  under.classList.add('under');
  let elvid = document.querySelector('.elvid' + id);
  if (elvid !== null) {
    elvid.play();
  }
  playedid = id;
  let moreimg = document.querySelector('.stimg' + id);
  moreimg.classList.add('usermainimage');
  let clickedel = document.querySelector('.ell' + id);
  clickedel.classList.add('clickedstory');
  i++;

  //   move
  if (id == 1) {
    wrapper.style.marginLeft = '430px';
  } else if (id == 2) {
    wrapper.style.marginLeft = '175px';
  } else if (id == 3) {
    wrapper.style.marginLeft = '-70px';
  } else if (id == 4) {
    wrapper.style.marginLeft = '-275px';
  } else if (id == 5) {
    wrapper.style.marginLeft = '-520px';
  } else if (id == 6) {
    wrapper.style.marginLeft = '-755px';
  } else if (id == 7) {
    wrapper.style.marginLeft = '-1000px';
  } else if (id == 8) {
    wrapper.style.marginLeft = '-1275px';
  } else if (id == 9) {
    wrapper.style.marginLeft = '-1510px';
  } else if (id == 10) {
    wrapper.style.marginLeft = '-1745px';
  }
}

// move slider media
let times = 5000;
let slidernum = 1;
let nowId = currentId;
function moveRight(id) {
  let SS_container = document.querySelector('.SS_' + id);
  let default1 = 187;
  if (mediaCountarr[id - 1] <= slidernum) {
    if (id !== 10) {
      let id1 = id + 1;
      slidernum = 0;
      SS_container.style.marginLeft = `-${default1 * slidernum}px`;
      slidernum = 1;
      clickstory(id1);
    }
  } else {
    // console.log(slidernum);
    SS_container.style.marginLeft = `-${default1 * slidernum}px`;
    slidernum++;
  }
}

function moveLeft(id) {
  let SS_container = document.querySelector('.SS_' + id);
  let default1 = 187;
  // console.log(slidernum);
  if (slidernum >= 1) {
    slidernum--;
    SS_container.style.marginLeft = `-${default1 * slidernum}px`;
  } else {
    if (id > 1) {
      let id1 = id - 1;
      clickstory(id1);
      slidernum = 1;
    }
  }
}

// function moveRight1(id) {
//   let SS_container = document.querySelector('.SS_' + id);
//   let default1 = 187;
//   if (mediaCountarr[id - 1] <= slidernum) {
//     if (id !== 10) {
//       let id1 = id + 1;
//       slidernum = 0;
//       SS_container.style.marginLeft = `-${default1 * slidernum}px`;
//       slidernum = 1;
//       clickstory(id1);
//     }
//   } else {
//     // console.log(slidernum);
//     SS_container.style.marginLeft = `-${default1 * slidernum}px`;
//   }
// }
// setInterval(intevals, times);

// function intevals() {
//   console.log(currentId);
//   if (times == 5000) {
//     slidernum = 1;
//   }
//   moveRight1(currentId);
//   slidernum++;
// }
