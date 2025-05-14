function isMobile() {
      return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    }

document.body.classList.add(isMobile() ? 'mobile' : 'desktop');
