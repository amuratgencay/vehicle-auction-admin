

export class KazanilanAracDurum implements Serializable<KazanilanAracDurum> {

    constructor(public id: number = 0,
        public ad: string = '') {
    }
    deserialize(input): KazanilanAracDurum {
        Object.keys(input).forEach(key => {
            this[key] = input[key];
        });
        return this;
    }
}