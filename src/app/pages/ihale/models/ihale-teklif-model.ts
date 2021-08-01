import { IhaleTeklifDTO, UyeBilgiService, KullaniciService } from '@zyazilim/online-ihale-data';
export class IhaleTeklifExtendedDTO extends IhaleTeklifDTO {
    static columnDefs(uyeBilgiService: UyeBilgiService): any[] {
        return [{
            key: 'ihaleAracIhaleBilgisiBaslik',
            name: 'İhale',
            type: 'string',
            cellTemplate: 'ihaleDetailLink',
            editorOptions: {
                customParams: {
                    detailKey: 'ihaleAracIhaleBilgisiId',
                },
            },
        },
        {
            key: 'ihaleAracAracPlaka',
            name: 'Araç',
            type: 'string',
            cellTemplate: 'aracDetailLink',
            editorOptions: {
                customParams: {
                    detailKey: 'ihaleAracAracId',
                },
            },
        },
        {
            key: 'artirimMiktari',
            name: 'Artırım Miktarı',
            type: 'number',
            format: {
                type: 'currency',
            },
            editorOptions: {
                format: {
                    type: 'currency',
                },
            },
        },
        {
            key: 'artirimSonrasiFiyat',
            name: 'Artırım Sonrası Fiyat',
            type: 'number',
            format: {
                type: 'currency',
            },
            editorOptions: {
                format: {
                    type: 'currency',
                },
            },
        },
        {
            key: 'teklifZamani',
            name: 'Teklif Zamanı',
            type: 'datetime',
            format: 'dd.MM.yyyy HH:mm:ss',
        },
        {
            key: 'durum',
            name: 'Kazanan Teklif Mi?',
            type: 'boolean'
        },
        {
            key: 'uyeBilgiId',
            name: 'Üye',
            type: 'select',
            editorOptions: {
                // customParams: {
                //     detailKey: 'uyeBilgiId',
                // },
                itemsAsync: uyeBilgiService.getAll(),
                displayExpr: 'tamAd',
                valueExpr: 'id'
            },
            // cellTemplate: 'uyeBilgiDetailLink',
            validators: [{
                type: 'required',
                message: 'Üye zorunludur',
            }],
        }
        ]
    }

}
