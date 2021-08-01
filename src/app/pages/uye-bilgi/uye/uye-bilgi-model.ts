import { UyeBilgiDTO, EnumsService, SehirService, RuhsatSahibiService } from '@zyazilim/online-ihale-data';

export class UyeBilgiExtendedDTO extends UyeBilgiDTO {

    public get displayExpr(): string {
        return `${this.tcKimlikNo} ${this.tamAd}`;
    }
    public static columnDefs(enumsService: EnumsService, sehirService: SehirService,
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
                key: 'ad',
                name: 'Ad',
                type: 'string',
                cellTemplate: 'uyeBilgiDetailLink',
                editorOptions: {
                    customParams: {
                        detailKey: 'id',
                    },
                },
                validators: [{
                    type: 'required',
                    message: 'Ad zorunludur',
                }],
            },
            {
                key: 'soyad',
                name: 'Soyad',
                type: 'string',
                cellTemplate: 'uyeBilgiDetailLink',
                editorOptions: {
                    customParams: {
                        detailKey: 'id',
                    },
                },
                validators: [{
                    type: 'required',
                    message: 'Soyad zorunludur',
                }],
            },
            {
                key: 'uyelikTipi',
                name: 'Üyelik Tipi',
                type: 'select',
                editorOptions: {
                    valueExpr: 'value',
                    displayExpr: 'name',
                    itemsAsync: enumsService.getUyelikTipleri(),
                },
                validators: [{
                    type: 'required',
                    message: 'Üyelik Tipi zorunludur',
                }],
            },
            {
                key: 'tcKimlikNo',
                name: 'T.C. Kimlik No',
                type: 'string',
                cellTemplate: 'uyeBilgiDetailLink',
                editorOptions: {
                    customParams: {
                        detailKey: 'id',
                    },
                },
                validators: [{
                    type: 'required',
                    message: 'T.C. Kimlik No zorunludur',
                }],
            },
            {
                key: 'adres',
                name: 'Adres',
                type: 'string',
            },
            {
                key: 'sehirId',
                name: 'Şehir',
                type: 'select',
                editorOptions: {
                    valueExpr: 'id',
                    displayExpr: 'ad',
                    itemsAsync: sehirService.getAll(),
                },
                validators: [{
                    type: 'required',
                    message: 'Şehir zorunludur',
                }],
            },
            {
                key: 'eposta',
                name: 'Eposta',
                type: 'string',
                cellTemplate: 'uyeBilgiDetailLink',
                editorOptions: {
                    customParams: {
                        detailKey: 'id',
                    },
                },
                validators: [{
                    type: 'required',
                    message: 'Eposta zorunludur',
                },
                {
                    type: 'email',
                    message: 'Eposta geçerli değil',
                }],
            },
            {
                key: 'telefon',
                editorOptions: { mask: '0 (000) 000 00 00' },
                name: 'Telefon',
                type: 'string',
            },
            {
                key: 'aktifMi',
                name: 'Aktif Mi',
                type: 'boolean',
            },

            {
                key: 'kampanyaIzin',
                name: 'Kampanya İzni',
                type: 'boolean',
            },
            {
                key: 'kayitTarihi',
                name: 'Kayıt Tarihi',
                type: 'date',
                format: 'dd.MM.yyyy hh:mm',
            },
            {
                key: 'bakiye',
                name: 'Bakiye',
                type: 'number',
                format: {
                    type: 'currency'
                },
                editorOptions: {
                    format: {
                        type: 'currency'
                    },
                    readOnly: true
                },
            },
            {
                key: 'kurumsalUye',
                name: 'Kurumsal Üye',
                type: 'boolean',
                editorOptions: {}
            },
            {
                key: 'vergiDairesi',
                name: 'Vergi Dairesi',
                type: 'string',
                editorOptions: {},
            },
            {
                key: 'vergiNumarasi',
                name: 'Vergi Numarası',
                type: 'string',
                editorOptions: {},
            },
            {
                key: 'firmaAdi',
                name: 'Firma Adı',
                type: 'string',
                formItem: {
                    visible: false,
                },
                editorOptions: {},
            },
        ];
    }
}
