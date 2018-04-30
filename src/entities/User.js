export class User {
    constructor(user) {
        this.userId = user.id;
        this.name = user.name;
        this.aboutShort = user.aboutShort;
        this.avatarUrl = user.avatarUrl;
        this.getDate = () => {

            const myDate = new Date(user.lastPostDate);
            const year = myDate.getFullYear();
            const month = myDate.getMonth();
            const day = myDate.getDate();
            const hour = myDate.getHours();
            const min = myDate.getMinutes();

            return (`${day}-${month + 1}-${year} at ${hour}:${min}`)
        }
    }


}

