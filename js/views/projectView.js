import { ProjectServices } from "../services/ProjectServices.js";

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById("projects-list");

    const services = new ProjectServices();
    const projects = await services.getProjects(); // necesitas async
    console.log("Proyectos obtenidos:", projects);

    // Pintar los proyectos
    if (!projects || projects.length === 0) {
        container.innerHTML = "<p>No hay proyectos disponibles.</p>";
    } else {
        container.innerHTML = projects.map(project => `
            <div class="project-card">
                <img src="${project.imgUrl}" alt="${project.name}" class="project-img">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <span class="project-meta">
                    Lenguaje: <strong>${project.language}</strong><br/>
                    Estado: <strong>${project.status}</strong><br/>
                    Inicio: ${project.startDate} - Fin: ${project.endDate || 'Actual'}
                </span>
                ${project.urlGithub
                ? `<a href="${project.urlGithub}" class="github-link" target="_blank" title="Ver en GitHub">
                          <img src="./../assets/images/github.svg" alt="GitHub">
                       </a>`
                : ''
            }
            </div>
        `).join("");
    }
});
