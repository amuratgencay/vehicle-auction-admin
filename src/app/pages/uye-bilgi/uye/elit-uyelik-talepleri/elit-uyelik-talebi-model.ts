import { ElitUyelikTalebiDTO, EnumsService } from '@zyazilim/online-ihale-data';

export class ElitUyelikTalebiExtendedDTO extends ElitUyelikTalebiDTO {
    public static columnDefs(enumsService: EnumsService): any[] {
        return [
            {
                key: 'id',
                name: 'Id',
                type: 'string',
                editorOptions: { readOnly: true },
                visible: false,
            },
            {
                key: 'uyeBilgiTamAd',
                name: 'Tam Ad',
                type: 'string'
            },
            {
                key: 'uyeBilgiEposta',
                name: 'Eposta',
                type: 'string'
            },
            {
                key: 'uyeBilgiTelefon',
                name: 'Telefon',
                type: 'string'
            },
            {
                key: 'uyeBilgiBakiye',
                name: 'Bakiye',
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
                key: 'talepDurumu',
                name: 'Talep Durumu',
                type: 'select',
                editorOptions: {
                    itemsAsync: enumsService.getElitUyelikTalepDurumlari(),
                    valueExpr: 'value',
                    displayExpr: 'name'
                }
            },
            {
                key: 'talepTarihi',
                name: 'Kayıt Tarihi',
                type: 'date',
                format: 'dd.MM.yyyy hh:mm'
            },

        ]
    }
}