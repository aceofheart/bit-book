export class Post {
    constructor(post) {
        this.authorId = post.userId;
        this.id = post.id;
        this.userName = post.userDisplayName;
        this.type = post.type;
        this.date = post.dateCreated;
        this.commentsNum = post.commentsNum

    }

    isImage() {
        return this.type === 'image'
    }
    isVideo() {
        return this.type === 'video'
    }
    isText() {
        return this.type === 'text'
    }
}

export class VideoPost extends Post {
    constructor(post) {
        super(post);
        const embedVideo = post.videoUrl;
        const res = embedVideo.replace("watch?v=", "embed/");
        this.videoUrl = res

    }
}
export class ImagePost extends Post {
    constructor(post) {
        super(post);
        this.imageUrl = post.imageUrl;
    }


}
export class TextPost extends Post {
    constructor(post) {
        super(post);
        this.text = post.text;
    }
}
