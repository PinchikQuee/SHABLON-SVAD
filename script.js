function scrollToBlock(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  
  function openForm() {
    document.getElementById("popupForm").style.display = "flex";
  }
  
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }
  
  function sendToTelegram() {
    const name = document.getElementById("nameInput").value;
    if (!name.trim()) {
      alert("Введите имя!");
      return;
    }
  
    const token = "7912816961:AAHDRqwDEwxwcrNVcDwAacMs_9bnm7QDH24";
    const chatId = "6272598524";
    const message = `Новая заявка на присутствие:\nИмя: ${name}`;
  
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(() => {
      alert("Спасибо! Ваша заявка отправлена.");
      closeForm();
    })
    .catch(() => {
      alert("Произошла ошибка при отправке.");
    });
  }


 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Если нужно только один раз — отключаем наблюдение:
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.fade-in-on-scroll').forEach(elem => {
    observer.observe(elem);
  });



<script>
  function isMobile() {
    return /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  if (!isMobile()) {
    document.getElementById("desktop-warning").style.display = "block";
    document.body.style.overflow = "hidden"; // блочим прокрутку на ПК
  }
</script>

  
