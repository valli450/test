document.addEventListener("DOMContentLoaded", () => {
    console.log("All cookies on load:", document.cookie); // Выводим все куки для проверки

    // Проверка, нужно ли показывать disclosure
    if (!getCookie("disclosureAccepted") || hasOneHourPassed()) {
        showDisclosure();
    } else {
        showHero();
    }

    // Логика принятия disclosure
    const acceptButton = document.getElementById("accept");
    const disclosureText = document.getElementById("disclosureTextP");

    disclosureText.addEventListener("scroll", () => {
        if (disclosureText.scrollTop + disclosureText.clientHeight >= disclosureText.scrollHeight) {
            acceptButton.disabled = false;
            acceptButton.classList.add("enabled");
        }
    });

    acceptButton.addEventListener("click", () => {
        acceptDisclosure();
    });
});

// Функция для показа disclosure
function showDisclosure() {
    const disclosure = document.getElementById("disclosure");
    disclosure.style.display = "flex";
    document.body.classList.add("modal-active");
    console.log("Disclosure shown.");
}

// Функция для скрытия disclosure и установки куки
function acceptDisclosure() {
    const disclosure = document.getElementById("disclosure");
    disclosure.classList.add("hidden");

    setTimeout(() => {
        disclosure.style.display = "none";
        document.body.classList.remove("modal-active");

        // Устанавливаем куки
        setCookie("disclosureAccepted", "true", 1); 
        setCookie("lastVisit", Date.now(), 1); 
        showHero();
        console.log("Disclosure accepted and cookies set.");
    }, 500);
}

// Функция для показа hero блока
function showHero() {
    const hero = document.querySelector(".hero");
    hero.classList.add("visible");
    console.log("Hero section shown.");
}

// Проверка, прошел ли час с момента последнего визита
function hasOneHourPassed() {
    const lastVisit = getCookie("lastVisit");
    console.log("Last visit timestamp from cookie:", lastVisit);
    if (lastVisit) {
        const currentTime = Date.now();
        const timeDiff = currentTime - parseInt(lastVisit);
        console.log("Time difference in milliseconds:", timeDiff);
        return timeDiff > 3600000; // 1 час в миллисекундах
    }
    return true; // Если куки нет, показываем disclosure
}

// Установка куки
function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime


// Mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burgerMenu");
  const navMenu = document.getElementById("navMenu");

  burgerMenu.addEventListener("click", () => {
      document.body.classList.toggle("modal-active")
      navMenu.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
          navMenu.classList.remove("open");
          document.body.classList.remove("modal-active");
      }
  });
});






