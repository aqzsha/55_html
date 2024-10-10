const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress');

const nextBtn = document.querySelector('#next'),
  prevBtn = document.querySelector('#prev');

nextBtn.addEventListener('click', () => {
  circles.forEach((item, i) => {
    if (item.classList.contains('active')) {
      currIndex = i;
    }
  });
  update(currIndex + 1);
  updateStatus(currIndex + 1);
  updateProgress(currIndex + 1);
});

prevBtn.addEventListener('click', () => {
  circles.forEach((item, i) => {
    if (item.classList.contains('active')) {
      currIndex = i;
    }
  });
  update(currIndex - 1);
  updateStatus(currIndex - 1);
  updateProgress(currIndex - 1);
});

const updateStatus = function (currIndex) {
  if (currIndex + 1 === circles.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
  if (currIndex > 0) {
    prevBtn.disabled = false;
  } else {
    prevBtn.disabled = true;
  }
};

const update = function (currIndex) {
  circles.forEach((item, i) => {
    if (i != 0) {
      item.classList.remove('active');
    }
  });
  circles.forEach((item, i) => {
    if (currIndex >= i) {
      item.classList.add('active');
    }
  });
};

const updateProgress = function (currIndex) {
  progress.style.width = (currIndex / (circles.length - 1)) * 100 + '%';
};
