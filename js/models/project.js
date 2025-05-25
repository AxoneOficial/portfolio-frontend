export class Project {
    constructor(id, name, description, language, startDate, endDate, status, imgUrl, urlGithub) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.language = language;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.imgUrl = imgUrl;
        this.urlGithub = urlGithub;
    }
}