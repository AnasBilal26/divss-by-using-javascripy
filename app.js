/** @format */

var toggles = document.querySelectorAll('.parent > div:nth-child(odd)');
var flexContainers = document.querySelectorAll('.parent > div:nth-child(even)');

function handleToggleClick(index) {
  return function () {
    flexContainers.forEach((flexContainer, idx) => {
      if (idx !== index) {
        flexContainer.style.height = '0px';
      }
    });

    if (
      flexContainers[index].style.height === '0px' ||
      !flexContainers[index].style.height
    ) {
      flexContainers[index].style.height = '150px';
    } else {
      flexContainers[index].style.height = '0px';
    }
  };
}

toggles.forEach((toggle, index) => {
  toggle.addEventListener('click', handleToggleClick(index));
});

const observer = new MutationObserver(function () {
  toggles = document.querySelectorAll('.parent > div:nth-child(odd)');
  flexContainers = document.querySelectorAll('.parent > div:nth-child(even)');

  toggles.forEach((toggle, index) => {
    toggle.removeEventListener('click', handleToggleClick(index));
    toggle.addEventListener('click', handleToggleClick(index));
  });
});

observer.observe(document.querySelector('.parent'), { childList: true });
