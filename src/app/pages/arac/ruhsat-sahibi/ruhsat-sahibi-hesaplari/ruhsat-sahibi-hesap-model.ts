import { UyeBilgiService, RuhsatSahibiService, RuhsatSahibiHesapDTO } from '@zyazilim/online-ihale-data';

export class RuhsatSahibiHesapExtendedDTO extends RuhsatSahibiHesapDTO {
    public static columnDefs(uyeBilgiService: UyeBilgiService,
        ruhsatSahibiService: RuhsatSahibiService): any[] {
        return [
            {
                key: 'id',
                name: 'Id',
                type: 'string',
                editorOptions: { readOnly: true },
                formItem: {
                    visible: false,
                },
                visible: false,
            },
            {
                key: 'ruhsatSahibiId',
                name: 'Ruhsat Sahibi',
                type: 'select',
                editorOptions: {
                    // customParams: {
                    //     detailKey: 'ruhsatSahibiId',
                    // },
                    itemsAsync: ruhsatSahibiService.getAll(),
                    displayExpr: 'displayExpr',
                    valueExpr: 'id'
                },
                // cellTemplate: 'ruhsatSahibiDetailLink',
                validators: [{
                    type: 'required',
                    message: 'Ruhsat Sahibi zorunludur',
                }],
            },
            {
                key: 'bankaAdi',
                name: 'Banka Adı',
                type: 'string',
                validators: [{
                    type: 'required',
                    message: 'Banka Adı zorunludur',
                }],
            },
            {
                key: 'iban',
                name: 'IBAN',
                type: 'string',
                validators: [{
                    type: 'required',
                    message: 'IBAN zorunludur',
                }],
            },
            {
                key: 'bankaSubesi',
                name: 'Banka Şubesi',
                type: 'string',
                validators: [{
                    type: 'required',
                    message: 'Banka Şubesi zorunludur',
                }],
            },
            {
                key: 'bankaSubeKodu',
                name: 'Banka Şube Kodu',
                type: 'string',
                validators: [{
                    type: 'required',
                    message: 'Banka Şube Kodu zorunludur',
                }],
            },
            {
                key: 'hesapNo',
                name: 'Hesap No',
                type: 'string',
                validators: [{
                    type: 'required',
                    message: 'Hesap No zorunludur',
                }],
            },
        ];
    }
}