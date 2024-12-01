function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/43578469?v=4"
    );
    img.setAttribute("alt", "Daniel light mode");
  } else {
    img.setAttribute(
      "src",
      "https://scontent.ffrc7-1.fna.fbcdn.net/v/t39.30808-6/376256036_6682298468496811_3334253131724959013_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Lcl547_HxtsQ7kNvgG2r3s5&_nc_zt=23&_nc_ht=scontent.ffrc7-1.fna&_nc_gid=A1zmEyVERvUTJGhlxuTl2fC&oh=00_AYB0Ge1sJ2D7mXm-rcQGP0tzk6kuM6DQvMcnzmSLQLG5uw&oe=67527C93"
    );
    img.setAttribute("alt", "Daniel dark mode");
  }
}
