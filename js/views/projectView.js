 //import { ProjectService } from "../services/ProjectService.js"; // Desactivado mientras no haya backend

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("projects-list");

    // 💡 Vector de ejemplo local con imagen y enlace GitHub
    const projects  = [];// ProjectServicegetProjects() || []; // Desactivado mientras no haya backend
    
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
