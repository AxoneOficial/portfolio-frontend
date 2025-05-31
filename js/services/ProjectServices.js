import { ProjectController } from "./../controllers/projectController.js";
export class ProjectServices {
    constructor() {
        this.projectController = new ProjectController();
    }

    async getProjects() {
        try {
            const response = await this.projectController.getProjects();
            return response;
        } catch (error) {
            console.error("Error fetching projects:", error);
            throw error;
        }
    }
}