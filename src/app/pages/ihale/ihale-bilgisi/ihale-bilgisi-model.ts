import { IhaleBilgisiListeDTO, EnumsService } from '@zyazilim/online-ihale-data';

export class IhaleBilgisiListeExtendedDTO extends IhaleBilgisiListeDTO{
    public get detailRouterLink(): { key: string, value: string[] }[] {
        return [
            { key: 'baslik', value: ['/pages', 'ihale', this.id.toString(), 'detay'] },
        ];
    }
    public static columnDefs(enumsService: EnumsService) {
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
            cellTemplate: 'ihaleDetailLink',
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
            editorOptions: {
                type: 'datetime',
            },
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
            editorOptions: {
                type: 'datetime',
            },
        },
        {
            key: 'ihaleTipi',
            name: 'İhale Tipi',
            type: 'select',
            editorOptions: {
                itemsAsync: enumsService.getIhaleTipleri(),
                valueExpr: 'value',
                displayExpr: 'name',
            },
            validators: [{
                type: 'required',
                message: 'İhale Tipi zorunludur',
            }],
        },
        {
            key: 'teklifArtisButton1',
            name: 'Teklif Artış Butonu 1',
            type: 'number',
            format: {
                type: 'currency',
            },
            editorOptions: {
                format: {
                    type: 'currency',
                },
            },
            //     validators: [{
            //         type: 'custom',
            //         validationCallback: (e) => {
            //             if (e.data.ihaleTipi === 0) {
            //                 return true;
            //             }
            //             return false;
            //         },
            //         message: 'Teklif Artış Butonu 1 zorunludur',
            //     }],
        },
        {
            key: 'teklifArtisButton2',
            name: 'Teklif Artış Butonu 2',
            type: 'number',
            format: {
                type: 'currency'
            },
            editorOptions: {
                format: {
                    type: 'currency'
                },
            },
            // validators: [{
            //     type: 'required',
            //     message: 'Teklif Artış Butonu 2 zorunludur',
            // }],
        },
        {
            key: 'teklifArtisButton3',
            name: 'Teklif Artış Butonu 3',
            type: 'number',
            format: {
                type: 'currency'
            },
            editorOptions: {
                format: {
                    type: 'currency'
                },
            },
            // validators: [{
            //     type: 'required',
            //     message: 'Teklif Artış Butonu 3 zorunludur',
            // }],
        },
        {
            key: 'teklifArtisButton4',
            name: 'Teklif Artış Butonu 4',
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
            key: 'teklifArtisButton5',
            name: 'Teklif Artış Butonu 5',
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
            key: 'teklifArtisButton6',
            name: 'Teklif Artış Butonu 6',
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
            key: 'durum',
            name: 'Durum',
            type: 'boolean',
        },
        {
            key: 'teklifSuresi',
            name: 'Teklif Süresi',
            type: 'number',
        },
        {
            key: 'uzatmaSuresi',
            name: 'Uzatma Süresi',
            type: 'number',
        },
        {
            key: 'gecisSuresi',
            name: 'Geçiş Süresi',
            type: 'number',
        }];
    }
}
export interface KalanZaman {
    gun: number;
    saat: number;
    dakika: number;
    saniye: number;
}
