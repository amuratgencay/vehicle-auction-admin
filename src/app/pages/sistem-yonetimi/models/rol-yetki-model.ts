
export class RolYetki implements Serializable<RolYetki> {
    constructor(public id: number = 0,
        public rolId: number = 0,
        public yetkiId: number = 0) {
    }
    deserialize(input): RolYetki {
        Object.keys(input).forEach(key => {
            this[key] = input[key];
        });
        return this;
    }
}