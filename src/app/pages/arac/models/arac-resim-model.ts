import { AracResimDTO } from '@zyazilim/online-ihale-data';
import { environment } from '../../../../environments/environment';

export class AracResimExtendedDTO extends AracResimDTO {
    /**
     *
     */
    public get fullUrl(): string {
        if (this.url.startsWith('http')) {
            return this.url;
        }
        return `${environment.baseApiUrl}${this.url}`;
    }
}