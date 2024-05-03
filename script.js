const projects = [
  {
    title: 'Sistem Informasi Akademik',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eligendi sit dolorem illum ea eum mollitia animi velit ratione aliquid, sapiente quidem soluta, et repellat temporibus reiciendis cumque. Minima, nihil.',
    links: [
      {
        type: 'github',
        url: '#',
      },
      {
        type: 'live',
        url: '#',
      },
    ],
  },
  {
    title: 'Sistem Informasi Akademik',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eligendi sit dolorem illum ea eum mollitia animi velit ratione aliquid, sapiente quidem soluta, et repellat temporibus reiciendis cumque. Minima, nihil.',
    links: [
      {
        type: 'github',
        url: '#',
      },
      {
        type: 'live',
        url: '#',
      },
    ],
  },
  {
    title: 'Sistem Informasi Akademik',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eligendi sit dolorem illum ea eum mollitia animi velit ratione aliquid, sapiente quidem soluta, et repellat temporibus reiciendis cumque. Minima, nihil.',
    links: [
      {
        type: 'github',
        url: '#',
      },
      {
        type: 'live',
        url: '#',
      },
    ],
  },
  {
    title: 'Sistem Informasi Akademik',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eligendi sit dolorem illum ea eum mollitia animi velit ratione aliquid, sapiente quidem soluta, et repellat temporibus reiciendis cumque. Minima, nihil.',
    links: [
      {
        type: 'github',
        url: '#',
      },
      {
        type: 'live',
        url: '#',
      },
    ],
  },
  {
    title: 'Sistem Informasi Akademik',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eligendi sit dolorem illum ea eum mollitia animi velit ratione aliquid, sapiente quidem soluta, et repellat temporibus reiciendis cumque. Minima, nihil.',
    links: [
      {
        type: 'github',
        url: '#',
      },
      {
        type: 'live',
        url: '#',
      },
    ],
  },
  {
    title: 'Sistem Informasi Akademik',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eligendi sit dolorem illum ea eum mollitia animi velit ratione aliquid, sapiente quidem soluta, et repellat temporibus reiciendis cumque. Minima, nihil.',
    links: [
      {
        type: 'github',
        url: '#',
      },
      {
        type: 'live',
        url: '#',
      },
    ],
  },
];

const projectsContent = document.getElementById('projects-content');
const projectsItems = projects.map(
  (item) => `
        <div class="projects__item">
            <h2>${item.title}</h2>
            <p>
              ${item.description}
            </p>
            <div class="projects__showcase">
              <a href="#">
                <img src="/assets/images/github.svg" alt="github" />
              </a>
              <a href="#">
                <img src="/assets/images/external-link.svg" alt="github" />
              </a>
            </div>
        </div>`
);

projectsContent.innerHTML = projectsItems.join('');
