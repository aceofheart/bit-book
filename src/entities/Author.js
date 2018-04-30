export class Author {
    constructor(author) {
        this.userId = author.userId;
        this.name = author.name;
        this.email = author.email;
        this.aboutShort = author.aboutShort;
        this.about = author.about;
        this.avatarUrl = author.avatarUrl;
        this.postsCount = author.postsCount;
        this.commentsCount = author.postsCount
    }
}