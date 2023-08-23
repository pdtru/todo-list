class Footer {
  render = () => {
    const container = document.createElement('div');
    container.className = 'footer';

    const footer = document.createElement('p');
    footer.innerHTML = 'Copyright © 2023 pdtru&nbsp';
    container.appendChild(footer);

    const github = document.createElement('a');
    github.href = 'https://github.com/pdtru';
    footer.appendChild(github);

    const githubIcon = document.createElement('i');
    githubIcon.className = 'fa-brands fa-github';
    github.appendChild(githubIcon);
    return container;
  };
}

export default Footer;
