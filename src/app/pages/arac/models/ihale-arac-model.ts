import { IhaleAracListeDTO, IhaleBilgisiService, EnumsService } from '@zyazilim/online-ihale-data';

export class IhaleAracListeExtendedDTO extends IhaleAracListeDTO {
    public get detailRouterLink(): { key: string, value: string[] }[] {
        return [
            { key: 'aracAdi', value: ['/pages', 'arac', this.id.toString(), 'detay'] },
            { key: 'plaka', value: ['/pages', 'arac', this.id.toString(), 'detay'] },
        ];
    }
    static columnDefs(enumsService: EnumsService, ihaleService: IhaleBilgisiService): any[] {
        return [
            {
                key: 'id',
                name: 'Id',
                type: 'string',
                editorOptions: { readOnly: true },
                visible: false,
            },
            {
                key: 'aracAracAdi',
                name: 'Araç',
                type: 'string',
                cellTemplate: 'aracDetailLink',
                editorOptions: {
                    customParams: {
                        detailKey: 'aracId',
                    },
                },
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
                key: 'aracId',
                name: 'Arac Id',
                type: 'string',
                editorOptions: { readOnly: true },
                visible: false,
            },
            {
                key: 'ihaleBilgisiId',
                name: 'İhale Bilgisi Id',
                type: 'string',
                editorOptions: { readOnly: true },
                visible: false,
            },
            {
                key: 'ihaleSirasi',
                name: 'İhale Sırası',
                type: 'number',
            },
            {
                key: 'baslangicFiyati',
                name: 'Başlangıç Fiyatı',
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
                key: 'hedefFiyat',
                name: 'Hedef Fiyat',
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
                key: 'kazanilanFiyat',
                name: 'Kazanılan Fiyat',
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
                key: 'firsatAraciMi',
                name: 'Fırsat Aracı Mı?',
                type: 'boolean',
            },
            {
                key: 'oneCikanAracMi',
                name: 'Öne Çıkan Araç Mı?',
                type: 'boolean',
            },
            {
                key: 'ihaleDurum',
                name: 'İhale Durum',
                type: 'select',
                editorOptions: {
                    displayExpr: 'name',
                    valueExpr: 'value',
                    itemsAsync: enumsService.getIhaleAracDurumlari(),
                },
            },
        ]
    }
}