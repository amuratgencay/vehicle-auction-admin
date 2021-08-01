

export class KullaniciRol implements Serializable<KullaniciRol> {

    /**
     *
     */
    constructor(public id: number = 0,
        public rolId: number = 0,
        public kullaniciId: string = '') {
    }
    deserialize(input: Object): KullaniciRol {
        Object.keys(input).forEach(key => {
            this[key] = input[key];
        });
        return this;
    }
}