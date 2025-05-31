import {env} from './../../environment/dev.js';
import {Project} from './../models/project.js';

export class ProjectController {
    constructor() {
        this.api = env.api;
        this.projects = [];
    }

    async getProjects() {
        const url = `${this.api}/proyectos`;

        try {
            const response = await fetch(url); // fetch del navegador
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            // No uses JSON.stringify aquí
            this.projects = data.map(item => new Project(
                item.id_proyecto, // cambia a id_proyecto si viene así
                item.name,
                item.description,
                item.language,
                item.startDate,
                item.endDate,
                item.status,
                item.imgUrl,
                item.imgUrl1,
                item.imgUrl2,
                item.imgUrl3,
                item.urlGithub
            ));

            return this.projects;
        } catch (error) {
            console.error('[ProjectController] Error al obtener proyectos:', error.message);
            return [];
        }
    }
}
