function myFunction() {
      const headerLogo = document.getElementById('header-logo');
      const loadingScreen = document.getElementById('loading-screen');
    
      headerLogo.classList.add('header__logo--loading');
      loadingScreen.classList.add('loading_screen--hide');
    
      setTimeout(function(){
        document.body.classList.remove('overflow_hidden');
        loadingScreen.classList.add('hide')
      }, 3000);
  }
  