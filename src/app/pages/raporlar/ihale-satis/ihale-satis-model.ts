import { IhaleAracKazananDTO } from '@zyazilim/online-ihale-data';

export class IhaleSatisModel extends IhaleAracKazananDTO {
    static columnDefs(): any[] {
        return [{
            key: 'ihaleBilgisiBaslangicTarihi',
            name: 'İhale Başlangıç Tarihi',
            type: 'datetime',
            format: 'dd.MM.yyyy'
        },
        {
            key: 'aracPlaka',
            name: 'Plaka',
            type: 'string',
            cellTemplate: 'aracDetailLink',
            editorOptions: {
                customParams: {
                    detailKey: 'aracId',
                },
            },
        },
        {
            key: 'sonTeklifZamani',
            name: 'Son Teklif',
            type: 'datetime',
            format: 'dd.MM.yyyy HH:mm:ss'
        },
        {
            key: 'kazananUyeTamAd',
            name: 'Kazanan',
            type: 'string',
            cellTemplate: 'uyeBilgiDetailLink',
            editorOptions: {
                customParams: {
                    detailKey: 'kazananUyeId',
                },
            },
        },
        {
            key: 'baslangicFiyati',
            name: 'Başlangıç fiyatı',
            type: 'number',
            format: {
                type: 'currency'
            },
            editorOptions: {
                format: {
                    type: 'currency'
                },
            },
        },
        {
            key: 'hedefFiyat',
            name: 'Hedef Fiyat',
            type: 'number',
            format: {
                type: 'currency'
            },
            editorOptions: {
                format: {
                    type: 'currency'
                },
            },
        },
        {
            key: 'kazanilanFiyat',
            name: 'Kazanılan Fiyat',
            type: 'number',
            format: {
                type: 'currency'
            },
            editorOptions: {
                format: {
                    type: 'currency'
                },
            },
        }
        ]
    }
}