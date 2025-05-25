import fetch from 'node-fetch';
import { Project } from '../models/project.js';
import { env } from '../../environment/dev.js';

export class ProjectController {
    constructor() {
        this.api = env.params.api;
        this.projects = [];
    }

    async getProjects() {
        const url = `${this.api}/getProjects`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            this.projects = data.map(item => new Project(
                item.id,
                item.name,
                item.description,
                item.language,
                item.startDate,
                item.endDate,
                item.status,
                item.imgUrl,
                item.urlGithub
            ));

            return this.projects;
        } catch (error) {
            console.error('[ProjectController] Error al obtener proyectos:', error.message);
            return [];
        }
    }
}
