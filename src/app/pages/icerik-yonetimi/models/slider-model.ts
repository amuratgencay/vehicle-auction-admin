import { Serializable } from '../../../@core/data/abstract/base-read-only.service';
import { environment } from '../../../../environments/environment';

export class Slider implements Serializable<Slider> {
    /**
     *
     */
    constructor(public id: string = '',
        public baslik: string = '',
        public url: string = '',
        public resimAciklama: string = '',
        public resimSira: number = 0,
        public aktifMi: boolean = true,
    ) {
    }
    public get fullUrl(): string {
        if (this.url.startsWith('http')) {
            return this.url
        }
        return `${environment.baseApiUrl}${this.url}`;
    }
    deserialize(input): Slider {
        Object.keys(input).forEach(key => {
            this[key] = input[key];
        });
        return this;
    }
}