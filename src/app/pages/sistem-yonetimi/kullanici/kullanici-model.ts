import { KullaniciDTO } from '@zyazilim/online-ihale-data';

export class KullaniciExtendedDTO extends KullaniciDTO {
    public static columnDefs(): any[] {
        return [
            {
                key: 'id',
                name: 'Id',
                type: 'string',
                editorOptions: { readOnly: true },
                visible: false,
            },
            {
                key: 'tamAd',
                name: 'Tam Ad',
                type: 'string',
                editorOptions: {
                    customParams: {
                        detailKey: 'id',
                    },
                },
                cellTemplate: 'kullaniciDetailLink',
            },
            {
                key: 'eposta',
                name: 'Eposta',
                type: 'string',
                editorOptions: {
                    customParams: {
                        detailKey: 'id',
                    },
                },
                cellTemplate: 'kullaniciDetailLink',
            },
            {
                key: 'telefon',
                name: 'Telefon',
                editorOptions: { mask: '0 (000) 000 00 00' },
                type: 'string',
            },
            {
                key: 'aktifMi',
                name: 'Aktif Mi',
                type: 'boolean',
            },
        ];
    }
}
