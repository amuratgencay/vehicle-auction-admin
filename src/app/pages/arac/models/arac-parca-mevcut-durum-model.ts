

export class AracParcaMevcutDurum implements Serializable<AracParcaMevcutDurum>{
    constructor(public id: number = null,
        public aracId: string = null,
        public aracParcaId: number = null,
        public cizikKucuk: boolean = false,
        public cizikBuyuk: boolean = false,
        public hasarHafif: boolean = false,
        public hasarAgir: boolean = false) {
    }
    deserialize(input): AracParcaMevcutDurum {
        Object.keys(input).forEach(key => {
            this[key] = input[key];
        });
        return this;
    }
}