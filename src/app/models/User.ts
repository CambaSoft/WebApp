export class User {
    constructor(
        public id: string,
        public email: string,
        public name: string,
        public firstName: string,
        public lastName: string,
        public photoUrl: string,
        public idToken: string
    ) {
    }
}