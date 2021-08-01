
import { HemenAlListeDTO } from '@zyazilim/online-ihale-data';

export class HemenAlListeExtendedDTO extends HemenAlListeDTO {

    public get durum(): boolean {
        return new Date(this.bitisTarihi) >= new Date();
    }
    public get detailRouterLink(): { key: string, value: string[] }[] {
        return [
            { key: 'baslik', value: ['/pages', 'hemen-al', this.id.toString(), 'detay'] },
        ];
    }
    public static columnDefs() {
        return [{
            key: 'id',
            name: 'Id',
            type: 'string',
            editorOptions: { readOnly: true },
            visible: false,
        },
        {
            key: 'baslik',
            name: 'Başlık',
            type: 'string',
            cellTemplate: 'hemenAlDetailLink',
            validators: [{
                type: 'required',
                message: 'Başlık zorunludur',
            }],
            editorOptions: {
                customParams: {
                    detailKey: 'id',
                },
            },
        },
        {
            key: 'yayinTarihi',
            name: 'Yayın Tarihi',
            type: 'datetime',
            format: 'dd.MM.yyyy HH:mm',
            validators: [{
                type: 'required',
                message: 'Yayın Tarihi zorunludur',
            }],
        },
        {
            key: 'baslangicTarihi',
            name: 'Başlangıç Tarihi',
            type: 'datetime',
            format: 'dd.MM.yyyy HH:mm',
            validators: [{
                type: 'required',
                message: 'Başlangıç Tarihi zorunludur',
            }],
        },
        {
            key: 'bitisTarihi',
            name: 'Bitiş Tarihi',
            type: 'datetime',
            format: 'dd.MM.yyyy HH:mm',
            validators: [{
                type: 'required',
                message: 'Bitiş Tarihi zorunludur',
            }],
        },
        {
            key: 'durum',
            name: 'Durum',
            type: 'boolean',
        }
        ];
    }
}
export interface KalanZaman {
    gun: number;
    saat: number;
    dakika: number;
    saniye: number;
}
